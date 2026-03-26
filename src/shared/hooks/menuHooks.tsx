import { useEffect } from "react";


export default function useMenu(menuRef: React.RefObject<HTMLDivElement | null>, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        
        // mount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [menuRef, setMenuOpen]);
}