"use client"

import { useEffect } from "react"
import {Crisp} from "crisp-sdk-web"

export const CrispChat = ()=>{
    useEffect(()=>{
        Crisp.configure("d8b477c5-e640-426d-8fb6-c7bd064df917")
    },[])

    return null
}