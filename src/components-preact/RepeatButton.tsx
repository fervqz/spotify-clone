import { useState } from "preact/hooks";
import { Repeat, Repeat1 } from "lucide-preact";

const RepeatButton = () => {

    const [currentState, setCurrentState] = useState('inactive');

    switch (currentState) {
        case 'active':
            return (<button className="active" onClick={() => setCurrentState('active-1')}>
                <Repeat
                    className="text-accent-muted hover:text-accent hover:cursor-pointer hover:stroke-accent"
                    size={18}
                />
            </button>)
        case 'active-1':
            return (
                <button className="active" onClick={() => setCurrentState('inactive')}>
                    <Repeat1
                        className="text-accent-muted hover:text-accent hover:cursor-pointer hover:stroke-accent"
                        size={18}
                    />
                </button>)
        default:
            return (
                <button onClick={() => setCurrentState('active')}>
                    <Repeat
                        className="text-gray-400 hover:text-white hover:cursor-pointer"
                        size={18}
                    />
                </button>)
    }
}

export default RepeatButton;