"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
    {
        name: "Daniel",
        avatar: "D",
        title: "Freelance Writer",
        description: "This application is a game-changer for writers like me. It streamlines the writing process and helps me stay organized. I'm impressed by its functionality and user-friendly interface!"
    },
    {
        name: "Emily",
        avatar: "E",
        title: "Graphic Designer",
        description: "I'm blown away by the creativity and user-friendliness of this application. It has truly elevated my design game!"
    },
    {
        name: "Michael",
        avatar: "M",
        title: "Marketing Specialist",
        description: "As a marketing professional, I rely on efficient tools, and this application ticks all the boxes. It's streamlined, powerful, and has become indispensable for my campaigns."
    },
    {
        name: "Sophia",
        avatar: "S",
        title: "Student",
        description: "Being a student with a busy schedule, this application has been a lifesaver. It's intuitive, making complex tasks feel simple. Thank you for making studying easier!"
    },
]

export const LandingContent = ()=>{
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {testimonials.map((item)=>(
                    <Card
                        key={item.description}
                        className="bg-[#192339] border-none text-white"
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}