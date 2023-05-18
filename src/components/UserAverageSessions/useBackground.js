import { useState } from "react"
/**
 * Hook that calculates the fill percentage of the dark background
 * @param {*} sessionsLength Number of sessions 
 * @returns 
 */
export const useBackground = (sessionsLength) => {
    const [isTooltipActive, setTooltip] = useState(false)
    const [backgroundPercent, setBackgroundPercent] = useState(null)

    const handleBackgroundPercent = (e) => {
        setTooltip(e.isTooltipActive)
        if (!e.isTooltipActive) return
        const labelSum = sessionsLength - 1
        const percent = ((100 * e.activeTooltipIndex) / labelSum)
        setBackgroundPercent(Math.abs(percent - 100))
    }

    const calculateCssPercent = (percent) => {
        if (percent === 50) {
            return `${backgroundPercent}%`
        } else if (percent < 50) {
            return `calc(${backgroundPercent}% + 0.5rem)`
        } else if (percent > 50) {
            return `calc(${backgroundPercent}% - 0.5rem)`
        }
    }
    return { isTooltipActive, setTooltip, handleBackgroundPercent, calculateCssPercent, backgroundPercent }
}