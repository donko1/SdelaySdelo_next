
export default function isParallel(): boolean {
    // Returns true if parallel mode is enabled
    return process.env.PARALLEL_SITE === "1";
}
