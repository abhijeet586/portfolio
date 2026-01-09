import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const Dock = ({
    items,
    desktopClassName = "",
    mobileClassName = ""
}) => {
    const mouseX = useMotionValue(Infinity);

    return (
        <>
            {/* Desktop Dock */}
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className={`mx-auto hidden md:flex h-16 items-end gap-4 rounded-2xl bg-white/10 px-4 pb-3 backdrop-blur-md border border-white/20 ${desktopClassName}`}
            >
                {items.map((item, idx) => (
                    <DockIcon mouseX={mouseX} key={idx} {...item} />
                ))}
            </motion.div>

            {/* Mobile Dock (Simplified) */}
            <div className={`md:hidden relative flex gap-4 overflow-x-auto p-4 ${mobileClassName}`}>
                {items.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 min-w-[60px]"
                    >
                        <div className="h-6 w-6 text-white mb-1">{item.icon}</div>
                        <span className="text-[10px] text-white opacity-80">{item.label}</span>
                    </a>
                ))}
            </div>
        </>
    );
};

const DockIcon = ({ mouseX, href, icon, label }) => {
    const ref = useRef(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className="aspect-square w-10 cursor-pointer rounded-full bg-white/10 flex items-center justify-center border border-white/10"
        >
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center text-white"
                title={label}
            >
                <motion.div
                    style={{ width: useTransform(width, [40, 80], [20, 40]) }}
                    className="flex items-center justify-center"
                >
                    {icon}
                </motion.div>
            </a>
        </motion.div>
    );
};

export default Dock;
