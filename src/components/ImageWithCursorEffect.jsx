import { useState } from 'react';
import { motion } from 'framer-motion';

const ImageWithCursorEffect = () => {
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPos = (e.clientX - rect.left) / rect.width - 0.5;
        const yPos = (e.clientY - rect.top) / rect.height - 0.5;

        setTransform({
            rotateX: yPos * 20,
            rotateY: -xPos * 20,
        });
    };

    const handleMouseLeave = () => {
        setTransform({ rotateX: 0, rotateY: 0 });
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                display: 'inline-block',
                perspective: '100px',
                maxWidth: '100%', // Prevent container from overflowing
                overflow: 'hidden', // Hide any overflow content
            }}
        >
            <motion.img
                src="https://cdni.iconscout.com/illustration/premium/thumb/travel-around-the-world-illustration-download-in-svg-png-gif-file-formats--logo-travelling-countries-different-and-tour-pack-illustrations-3798757.png?f=webp"
                alt="Travel Journey"
                style={{
                    width: '95%', // Ensure image width fits within the container
                    maxWidth: '1000px', // Restrict maximum image width
                    marginLeft: '10px', // Shift image slightly to the right
                    height: '78vh', // Maintain image height
                    objectFit: 'contain', // Ensure image scales properly within its container
                }}
                initial={{ scale: 1, rotateX: 0, rotateY: 0 }}
                animate={{
                    rotateX: transform.rotateX,
                    rotateY: transform.rotateY,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                whileHover={{ scale: 1.05 }}
            />
        </motion.div>
    );
};

export default ImageWithCursorEffect;
