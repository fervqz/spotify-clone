import { useEffect, useState, useRef } from 'preact/hooks';
import { mapRange } from "@/utils/time";

interface Props {
    value: number;
    onDragStart?: (value: number) => void;
    onDragging?: (value: number) => void;
    onDragEnd?: (value: number) => void;
}

export default function Slider(props: Props) {

    const {
        value,
        onDragStart = (_: number) => {},
        onDragging = (_: number) => {},
        onDragEnd = (_: number) => {},
    } = props;

    const offsetStartEnd = 10;
    const [isDragging, setIsDragging] = useState(false);
    const [progressValue, setProgressValue] = useState(0);

    const sliderRef = useRef<HTMLDivElement | undefined>(undefined);
    const sliderValueRef = useRef<HTMLDivElement | undefined>(undefined);

    useEffect(() => {
        setProgressValue(value);
    }, [value]);

    const handleOnMouseDown = () => {
        setIsDragging(true);
        onDragStart(progressValue);
    }

    const handleOnMouseMove = (e: MouseEvent) => {
        if(isDragging){
            updateSlider(e);
            onDragging(progressValue);
        }
    }

    const handleOnMouseUp = (e: MouseEvent) => {
        updateSlider(e);
        setIsDragging(false);
        onDragEnd(progressValue);
    }

    const updateSlider = (e: MouseEvent) => {
        const { left, right } = sliderRef.current?.getBoundingClientRect() ?? { left: 0, right: 0};
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
    // @ts-ignore
        ref={sliderRef}
        className="group w-full py-2 hover:cursor-pointer"
        onMouseDown={handleOnMouseDown}
        onMouseMove={handleOnMouseMove}
        onMouseUp={handleOnMouseUp}
    >
        <div className="bg-gray-600 rounded-full h-1 mx-2">
            <div
            // @ts-ignore
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