import { PlayIcon } from "../../ui";
import { useEffect, useRef } from "react";
import styles from "./VideoPlayer.module.css"
import type { VideoPlayerProps } from "../../../types/global";
const VideoPlayer = ({
    video,
    fallback,
    isPlaying,
    onPlay,
    videoId,
    type = "video",
    isOverlay = true,
    radius = false,
    setIsPlaying,
}: VideoPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const el = videoRef.current;
        if (!el) return;

        if (isPlaying) {
            el.play().catch(() => { });
        } else {
            el.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.src = video;
        }
    }, [video]);

    const handlePlayClick = () => {
        onPlay();
        if (isPlaying) {
            setIsPlaying(null);
        }
        else {
            setIsPlaying(videoId);
        }
    };

    // Classes as before
    let videoContainerClassName = "";
    let videoTypeClassName = "";
    switch (type) {
        case "video":
            videoContainerClassName = styles.fullVideoContainer;
            videoTypeClassName = styles.fullVideo;
            break;
        case "reel":
            videoContainerClassName = styles.reelVideoContainer;
            videoTypeClassName = styles.reelVideo;
            break;
        case "square":
            videoContainerClassName = styles.squareVideoContainer;
            videoTypeClassName = styles.squareVideo;
            break;
    }

    return (
        <div className={`${styles.videoContainer} ${videoContainerClassName} ${radius && styles.radiusVideoContainer}`}>
            {!isPlaying && (
                <>
                    <PlayIcon onClick={handlePlayClick} className={styles.playIcon} />
                    {isOverlay && <div className={styles.overlay} />}
                </>
            )}
            <video

                ref={videoRef}
                className={`${styles.video} ${videoTypeClassName} ${radius && styles.radiusVideo}`}
                loop
                // muted
                // autoPlay
                playsInline
                poster={fallback}
                preload="auto"
                onClick={handlePlayClick}
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;