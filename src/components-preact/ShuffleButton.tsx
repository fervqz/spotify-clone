import { useState } from "preact/hooks";
import { Shuffle } from "lucide-preact";
import classNames from 'classnames';

const SuffleButton = () => {
    
    const [isActive, setIsActive] = useState(true);

    return (
        <Shuffle
            onClick={() => setIsActive(prev => !prev)}
            className={classNames([
                isActive ? "text-accent-muted hover:text-accent hover:stroke-accent" : "text-gray-400 hover:text-white hover:stroke-white",
                "hover:cursor-pointer",
            ])}
            size={18}
        />
    )
}

export default SuffleButton