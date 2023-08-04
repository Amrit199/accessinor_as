"use client"

import { ButtonProps } from "@/types/Page"

export default function Button({ title, styles } : ButtonProps) {
    return (
        <button className={`btn ${styles}`}>{title}</button>
    )
}