export default function Footer() {
    return (
        <footer className="text-xs flex flex-col gap-1 text-center text-gray-600 justify-center mb-7 dark:text-white/70">
            <small className="text-xs">&copy; 2024 Vishnu S P. All rights reserved.</small>
            <p>
                <span className="font-semibold">About this website : </span>
                Built with React &amp; Next.js, TailwindCSS, Framer-Motion, Resend, React-Email &amp; love 😄.
            </p>
        </footer>
    );
}
