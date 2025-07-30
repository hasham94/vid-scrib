const Footer = () => {
    return (
        <footer className="mt-auto">
            <div className="mx-auto py-4">
                <div
                    className="mt-4 border-t border-gray-100 pt-4 sm:flex sm:items-center sm:justify-between lg:mt-24 px-6 lg:px-8"
                >
                    <span className='text-[#373543] block text-center'>© 2025 Hasham.live All rights reserved.</span>
                    <ul className="mt-4 flex justify-center gap-6 sm:mt-0 lg:justify-end">
                        <li>
                            <a
                                href="https://x.com/HashamArshad94"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <span className="sr-only">Twitter</span>

                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/hasham94"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <span className="sr-only">GitHub</span>

                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/hasham-m-53996213a/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <span className="sr-only">LinkedIn</span>

                                <svg
                                    className="size-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M20.451 20.451h-3.554v-5.569c0-1.328-.025-3.036-1.85-3.036-1.853 0-2.136 1.445-2.136 2.938v5.667H9.357V9h3.413v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.603 0 4.267 2.37 4.267 5.455v6.285zM5.337 7.433a2.064 2.064 0 110-4.128 2.064 2.064 0 010 4.128zM7.119 20.451H3.554V9h3.565v11.451zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.228.792 24 1.771 24h20.451C23.2 24 24 23.228 24 22.278V1.723C24 .771 23.2 0 22.225 0z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;