"use client"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AOSInitalizer() {
    useEffect(() => {
        Aos.init({
            startEvent: 'DOMContentLoaded',
            delay: 200,
            duration: 500,
            easing: "ease-in-out"
        });
    }, []);

    return null;
}