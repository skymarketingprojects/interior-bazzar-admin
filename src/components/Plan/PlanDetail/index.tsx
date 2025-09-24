import { useState } from "react";
import { CtaLink } from "../../ui";
import { Link } from "react-router-dom";
import styles from "./PlanDetail.module.css"
import VideoPlayer from "../../shared/Video";
import type { PlanType } from "../../../types/content";
import { PAGES } from "../../../utils/constants/app";
const PlanDetail = ({ plan }: { plan: PlanType }) => {
    const {
        id,
        name,
        price,
        video,
        fallback,
        features,
        plan_pdf,
        description,
    } = plan;
    const type = "square";
    const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
    const handlePlayRequest = (videoId: string) => {
        setPlayingVideoId(videoId);
    };


    return (
        <div className={`container ${styles.container}`}>
            {/* Left Side - Plan Details */}
            <div className={styles.leftCard}>
                <h2 className={styles.title}>{name}</h2>
                <p className={styles.subtitle}>
                    {description}
                </p>
                <ul className={styles.features}>
                    {features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
            </div>

            {/* Right Side - Offer */}
            <div className={styles.rightCard}>
                <div className={styles.imageWrapper}>
                    <VideoPlayer
                        radius
                        video={video}
                        fallback={fallback}
                        isOverlay={false}
                        type={type}
                        videoId={`vide${id + 1}`}
                        isPlaying={`vide${id + 1}` === playingVideoId}
                        onPlay={() => handlePlayRequest(`vide${id + 1}`)}
                        setIsPlaying={setPlayingVideoId}

                    />
                </div>
                <div className={styles.trial}>Trial <strong>2 months</strong></div>
                <div className={styles.price}>₹{price}/-</div>
                <CtaLink to={`${PAGES.MAKE_PAYMENT}?plan=${id}`} variant="theme" className={styles.buyButton}>Buy Now!</CtaLink>
                <Link target="_blank" to={`${plan_pdf}`} className={styles.downloadLink}>
                    Download PDF
                </Link>
            </div>
        </div>
    )
}


export const PlanDetailShimmer = () => {
    return (
        <div className="container grid grid-cols-[2.5fr_1fr] gap-6 p-6 rounded-md bg-white animate-pulse">
            {/* Left Card */}
            <div className="bg-gray-100 rounded-md p-6 flex flex-col gap-4">
                {/* Title */}
                <div className="h-6 w-1/3 rounded bg-gray-300" />
                {/* Subtitle */}
                <div className="h-4 w-2/3 rounded bg-gray-200" />
                <div className="h-4 w-1/2 rounded bg-gray-200" />

                {/* Features */}
                <ul className="flex flex-col gap-3 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <li key={i} className="h-4 w-3/4 rounded bg-gray-200" />
                    ))}
                </ul>
            </div>

            {/* Right Card */}
            <div className="border border-gray-200 bg-gray-100 rounded-md p-6 flex flex-col items-center gap-4">
                {/* Video / Image Placeholder */}
                <div className="w-full h-32 rounded bg-gray-300" />

                {/* Trial */}
                <div className="h-4 w-20 rounded bg-gray-200" />

                {/* Price */}
                <div className="h-6 w-16 rounded bg-gray-300" />

                {/* Button */}
                <div className="h-10 w-full rounded bg-gray-300" />

                {/* Download Link */}
                <div className="h-4 w-24 rounded bg-gray-200" />
            </div>
        </div>
    );
}
export default PlanDetail;