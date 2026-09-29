// import { Link } from "react-router-dom"
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"

// interface CustomButtonProps {
//     href: string
//     children: React.ReactNode
//     variant?: "white" | "orange"
//     className?: string
//     style,
// }

// export function CustomButton({ href, children, variant = "white", className }: CustomButtonProps) {
//     return (
//         <Button
//             asChild
//             variant="outline"
//             className={cn(
//                 "bg-transparent border-2 font-bold tracking-wider text-sm px-8 py-2 transition-all duration-300",
//                 "rounded-none", // Sharp edges
//                 variant === "white"
//                     ? "border-white text-white/90 hover:border-red-500 hover:text-orange-500"
//                     : "border-white-500 text-white/ hover:border-red-600 hover:text-orange-600",
//                 className

//             )}
//             // style={{ borderColor: "rgb(160, 24, 51)" }}
//             style={{ borderColor: "rgb(160, 24, 51)", fontFamily: "'Bebas Neue', sans-serif" }}

//         >
//             <Link to={href}>{children}</Link>
//         </Button>
//     )
// }
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CustomButtonProps {
    href: string
    children: React.ReactNode
    variant?: "white" | "orange"
    className?: string
}

export function CustomButton({ href, children, variant = "white", className }: CustomButtonProps) {
    return (
        <Button
            asChild
            variant="outline"
            className={cn(
                "bg-transparent border-2 font-bold tracking-wider text-sm px-8 py-2 transition-all duration-300",
                "rounded-none font-bebas", // ← Add font-bebas class here
                variant === "white"
                    ? "border-white text-white/90 hover:border-red-500 hover:text-orange-500"
                    : "border-white-500 text-white/ hover:border-red-600 hover:text-orange-600",
                className
            )}
            style={{ borderColor: "rgb(160, 24, 51)" }}
        >
            <Link to={href}>{children}</Link>
        </Button>
    )
}