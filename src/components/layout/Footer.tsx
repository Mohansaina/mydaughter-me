import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-primary-900 text-primary-100">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="relative h-28 w-80 mb-4 drop-shadow-lg">
                            <Image
                                src="/Untitled.png"
                                alt="My Daughters & Me"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-primary-200 mb-6 max-w-md">
                            Elegant boutique fashion for mothers and daughters. Creating beautiful moments together since 2020.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-primary-300 hover:text-white transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-primary-300 hover:text-white transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-primary-300 hover:text-white transition-colors">
                                <span className="sr-only">Pinterest</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-5.49 7.905c-.295 1.052-1.037 1.863-2.137 2.35-.62.276-1.304.377-1.985.15a2.217 2.217 0 01-.94-.576 2.296 2.296 0 01-.315-.717c0-.457.103-.89.294-1.27.2-.4.498-.74.893-.987.276-.172.58-.295.906-.364.326-.07.662-.085.993-.045.245.03.477.09.69.178.214.088.41.2.584.333.174.133.326.293.452.478.125.184.217.39.272.613l.016.065c.098.418.292.783.57 1.074.28.29.604.504.965.636.36.132.752.17 1.147.112.26-.038.504-.115.722-.226.218-.112.408-.26.565-.44.156-.18.27-.4.336-.65.065-.25.08-.52.044-.787-.037-.268-.128-.52-.27-.748-.142-.228-.336-.415-.575-.554a2.37 2.37 0 00-.76-.304c-.28-.052-.57-.06-.855-.02-.286.04-.56.124-.815.248a2.08 2.08 0 00-.627.42c-.19.19-.33.43-.414.71-.084.28-.11.58-.076.877.033.296.128.577.28.833.152.256.354.47.599.634.245.165.522.283.818.35.296.068.603.086.901.054.298-.032.584-.112.845-.236.261-.125.49-.294.678-.5.188-.208.34-.454.448-.728.108-.274.157-.572.144-.873-.014-.302-.07-.597-.164-.873-.095-.277-.236-.527-.418-.743-.182-.216-.407-.392-.667-.52-.26-.128-.546-.21-.844-.242a2.665 2.665 0 00-.868.048 2.51 2.51 0 00-.787.27 2.425 2.425 0 00-.632.45c-.19.19-.333.42-.424.68-.09.26-.134.543-.128.828l.003.078c.006.282.068.556.182.812.114.256.284.48.5.663.216.183.473.322.757.41.284.088.585.133.888.133.32 0 .632-.05.923-.147.29-.097.552-.237.775-.415.223-.178.407-.397.545-.648.138-.25.228-.532.265-.833.037-.3.022-.608-.044-.907z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-primary-300 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop" className="text-primary-300 hover:text-white transition-colors">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-primary-300 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-primary-300 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Customer Service</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-primary-300 hover:text-white transition-colors">
                                    Shipping & Returns
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-primary-300 hover:text-white transition-colors">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-primary-300 hover:text-white transition-colors">
                                    Size Guide
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-primary-300 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-primary-800">
                    <p className="text-center text-primary-400 text-sm">
                        © {new Date().getFullYear()} My Daughters & Me. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
