import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function FooterComponent() {
    return (
        <Footer container className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <FooterBrand
                            href="https://flowbite.com"
                            src="https://flowbite.com/docs/images/logo.svg"
                            alt="Flowbite Logo"
                            name="Flowbite"
                            className="text-gray-900 dark:text-white" // Ensure brand text color is correct
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <FooterTitle title="about" className="text-gray-900 dark:text-white" />
                            <FooterLinkGroup col>
                                <FooterLink href="#" className="text-gray-900 dark:text-white">Flowbite</FooterLink>
                                <FooterLink href="#" className="text-gray-900 dark:text-white">Tailwind CSS</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="Follow us" className="text-gray-900 dark:text-white" />
                            <FooterLinkGroup col>
                                <FooterLink href="#" className="text-gray-900 dark:text-white">Github</FooterLink>
                                <FooterLink href="#" className="text-gray-900 dark:text-white">Discord</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="Legal" className="text-gray-900 dark:text-white" />
                            <FooterLinkGroup col>
                                <FooterLink href="#" className="text-gray-900 dark:text-white">Privacy Policy</FooterLink>
                                <FooterLink href="#" className="text-gray-900 dark:text-white">Terms &amp; Conditions</FooterLink>
                            </FooterLinkGroup>
                        </div>
                    </div>
                </div>
                <FooterDivider className="border-gray-300 dark:border-gray-700" />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <FooterCopyright href="#" by="Flowbite™" year={2022} className="text-gray-900 dark:text-white" />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FooterIcon href="#" icon={BsFacebook} className="text-gray-900 dark:text-white" />
                        <FooterIcon href="#" icon={BsInstagram} className="text-gray-900 dark:text-white" />
                        <FooterIcon href="#" icon={BsTwitter} className="text-gray-900 dark:text-white" />
                        <FooterIcon href="#" icon={BsGithub} className="text-gray-900 dark:text-white" />
                        <FooterIcon href="#" icon={BsDribbble} className="text-gray-900 dark:text-white" />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
