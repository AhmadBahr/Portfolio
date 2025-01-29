import React from 'react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
    if (!isOpen) return null; 
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="relative bg-gray-800 p-6 rounded-lg max-w-4xl w-full">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-blue-600 p-2 rounded-full"
                >
                    X
                </button>
                <iframe
                    src={videoUrl}
                    title="Demo Video"
                    className="w-full h-96 rounded-lg"
                    allow="autoplay; fullscreen"
                ></iframe>
            </div>
        </div>
    );
};

export default VideoModal;
