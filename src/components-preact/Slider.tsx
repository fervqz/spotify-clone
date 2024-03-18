import { useEffect, useState, useRef } from 'preact/hooks';
import { mapRange } from "@/utils/time";

interface Props {
    value: number;
    onDragStart?: () => void;
    onDragging?: () => void;
    onDragEnd?: () => void;
}

export default function Slider(props: Props) {

    const {
        value,
        onDragStart = () => {},
        onDragging = () => {},
        onDragEnd = () => {},
    } = props;

    const offsetStartEnd = 10;
    const [isDragging, setIsDragging] = useState(false);
    const [progressValue, setProgressValue] = useState();

    const sliderRef = useRef<HTMLElement | undefined>(undefined);
    const sliderValueRef = useRef<HTMLElement | undefined>(undefined);

    useEffect(() => {
        setProgressValue(value);
    }, [value]);

    const handleOnMouseDown = (e: MouseEvent) => {
        setIsDragging(true);
        updateSlider(e);
        onDragStart();
    }

    const handleOnMouseMove = (e: MouseEvent) => {
        if(isDragging){
            updateSlider(e);
            onDragging();
        }
    }

    const handleOnMouseUp = (e: MouseEvent) => {
        setIsDragging(false);
        onDragEnd(progressValue);
    }

    const updateSlider = (e: MouseEvent) => {
        const { left, right } = sliderRef.current.getBoundingClientRect();
        const percent = mapRange(
            e.clientX,
            left + offsetStartEnd,
            right - offsetStartEnd,
            0,
            100
        );
        setProgressValue(percent);
    }

    return (<div
        ref={sliderRef}
        className="group w-full py-2 hover:cursor-pointer"
        onMouseDown={handleOnMouseDown}
        onMouseMove={handleOnMouseMove}
        onMouseUp={handleOnMouseUp}
    >
        <div className="bg-gray-600 rounded-full h-1 mx-2">
            <div
                ref={sliderValueRef}
                className="relative bg-white h-1 rounded-full group-hover:bg-accent"
                style={{ width: `${progressValue}%` }}
            >
                {/* Slider thumb */}
                <div className="hidden absolute -right-1.5 -top-1 size-3 shadow shadow-black rounded-full bg-white group-hover:block"></div>
            </div>
        </div>
    </div>);
}