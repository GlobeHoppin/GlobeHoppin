import PropTypes from 'prop-types';
import { MapPinIcon, ChatBubbleBottomCenterTextIcon, CameraIcon, ShareIcon } from '@heroicons/react/24/outline';

const FlowStep = ({ step, isLast }) => (
    <div className="flex items-center">
        <div className="flex flex-col items-center">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-white" />
            </div>
            <h6 className="font-semibold text-xl text-white text-center mt-2">{step.name}</h6>
        </div>
        {!isLast && (
            <div className="flex-grow w-[160px] h-1 bg-orange-600 mx-4"></div>
        )}
    </div>
);

FlowStep.propTypes = {
    step: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
    }).isRequired,
    isLast: PropTypes.bool.isRequired,
};

const FlowChart = () => {
    const features = [
        {
            id: 1,
            name: "Pin Location",
            description: "Add some Description",
            icon: MapPinIcon,
        },
        {
            id: 2,
            name: "Log Experience",
            description: "Add some Description",
            icon: ChatBubbleBottomCenterTextIcon,
        },
        {
            id: 3,
            name: "Add Memorable Moments",
            description: "Add some Description",
            icon: CameraIcon,
        },
        {
            id: 4,
            name: "Share",
            description: "Add some Description",
            icon: ShareIcon,
        },
    ];

    return (
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Your Travel Log Flow</h2>

            {/* Container for the flow steps */}
            <div className="flex items-center">
                {features.map((feature, index) => (
                    <FlowStep key={feature.id} step={feature} isLast={index === features.length - 1} />
                ))}
            </div>
        </div>
    );
};

export default FlowChart;