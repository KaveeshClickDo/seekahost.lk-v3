import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full">
      <div className="bg-[#001F40] text-white py-10">
        <div className="container mx-auto px-5">
          <div className="mb-8">
            <div className="mb-4">
              <Image src="/images/shared/footer-logo.png" alt="SeekaHost" width={147} height={62} />
            </div>
            <hr className="border-gray-700 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="md:text-lg font-medium mb-4">{t('About.title')}</h3>
              <p className="text-gray-300 mb-2 font-medium">2025 SeekaHost™</p>
              <p className="text-gray-300 font-medium">{t('About.description')}</p>

              <div className="flex md:flex-col mt-6">
                <div className="flex">
                  <Link href="https://www.youtube.com/@SeekaHost">
                    <div className="p-2">
                      <Image
                        src="/images/socialmedia-icons/youtube.svg"
                        alt="youtube"
                        width={40}
                        height={40}
                      />
                    </div>
                  </Link>
                  <Link href="https://x.com/atSeekaHost">
                    <div className="p-2">
                      <Image
                        src="/images/socialmedia-icons/twitter.svg"
                        alt="Twitter"
                        width={40}
                        height={40}
                      />
                    </div>
                  </Link>
                  <Link href="https://www.facebook.com/seekahost">
                    <div className="p-2">
                      <Image
                        src="/images/socialmedia-icons/facebook.svg"
                        alt="Facebook"
                        width={40}
                        height={40}
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex">
                  <Link href="https://www.linkedin.com/company/seekahost/">
                    <div className="p-2">
                      <Image
                        src="/images/socialmedia-icons/linkedin.svg"
                        alt="Linkedin"
                        width={40}
                        height={40}
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="p-2">
                      <Image
                        src="/images/socialmedia-icons/whatsapp.svg"
                        alt="Whatsapp"
                        width={40}
                        height={40}
                      />
                    </div>
                  </Link>
                  <Link href="https://www.tiktok.com/@seekahost?_t=8dvP0XE03Fj&_r=1">
                    <div className="p-2">
                      <Image
                        src="/images/socialmedia-icons/tiktok.svg"
                        alt="Tiktok"
                        width={40}
                        height={40}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="md:text-lg font-medium mb-5">{t('HostingServices.title')}</h3>
              <ul className="space-y-4">
                <li><Link href="/business-web-hosting" className="text-gray-300 hover:text-white font-medium">{t('HostingServices.links.businessWebHosting')}</Link></li>
                <li><Link href="/cheap-web-hosting-with-cpanel" className="text-gray-300 hover:text-white font-medium">{t('HostingServices.links.cheapCpanelHosting')}</Link></li>
                <li><Link href="/nodejs-hosting" className="text-gray-300 hover:text-white font-medium">{t('HostingServices.links.nodejsHosting')}</Link></li>
                <li><Link href="/agency-hosting" className="text-gray-300 hover:text-white font-medium">{t('HostingServices.links.agencyHosting')}</Link></li>
                <li><Link href="/hosting-migration" className="text-gray-300 hover:text-white font-medium">{t('HostingServices.links.hostingMigration')}</Link></li>
              </ul>

              <h3 className="md:text-lg font-medium mb-5 mt-10">{t('OurCompany.title')}</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-gray-300 hover:text-white font-medium">{t('OurCompany.links.aboutSeekaHost')}</Link></li>
                <li><Link href="https://university.seekahost.com/" className="text-gray-300 hover:text-white font-medium">{t('OurCompany.links.seekaHostUniversity')}</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white font-medium">{t('OurCompany.links.seekaHostBlog')}</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white font-medium">{t('OurCompany.links.contactUs')}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="md:text-lg font-medium mb-5">{t('DomainRegistration.title')}</h3>
              <ul className="space-y-4">
                <li><Link href="/register-domain" className="text-gray-300 hover:text-white font-medium">{t('DomainRegistration.links.registerDomain')}</Link></li>
                <li><Link href="/domain-pricing" className="text-gray-300 hover:text-white font-medium">{t('DomainRegistration.links.domainPricing')}</Link></li>
                <li><Link href="/domain-transfer" className="text-gray-300 hover:text-white font-medium">{t('DomainRegistration.links.domainTransfer')}</Link></li>
                <li><Link href="/category/domain-registration" className="text-gray-300 hover:text-white font-medium">{t('DomainRegistration.links.premiumDomain')}</Link></li>
                <li><Link href="/free-ssl-certificates-lets-encrypt" className="text-gray-300 hover:text-white font-medium">{t('DomainRegistration.links.sslCertificates')}</Link></li>
              </ul>

              <h3 className="md:text-lg font-medium mb-5 mt-10">{t('WordPress.title')}</h3>
              <ul className="space-y-4">
                <li><Link href="/wordpress-hosting" className="text-gray-300 hover:text-white font-medium">{t('WordPress.links.wordpressWebHosting')}</Link></li>
                <li><Link href="/managed-wordpress" className="text-gray-300 hover:text-white font-medium">{t('WordPress.links.managedWordpress')}</Link></li>
                <li><Link href="/woocommerce-hosting" className="text-gray-300 hover:text-white font-medium">{t('WordPress.links.woocommerceHosting')}</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white font-medium">{t('WordPress.links.wordpressTechnicalSupport')}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="md:text-lg font-medium mb-5">{t('Marketing.title')}</h3>
              <ul className="space-y-4">
                <li><Link href="/google-advertising-campaigns" className="text-gray-300 hover:text-white font-medium">{t('Marketing.links.googleAdvertising')}</Link></li>
                <li><Link href="/free-business-listing" className="text-gray-300 hover:text-white font-medium">{t('Marketing.links.businessListing')}</Link></li>
                <li><Link href="/seo-consultancy" className="text-gray-300 hover:text-white font-medium">{t('Marketing.links.seoConsultancy')}</Link></li>
                <li><Link href="/online-marketing-courses" className="text-gray-300 hover:text-white font-medium">{t('Marketing.links.marketingCourses')}</Link></li>
                <li><Link href="/personalized-hosting" className="text-gray-300 hover:text-white font-medium">{t('Marketing.links.personalizedHosting')}</Link></li>
              </ul>

              <h3 className="md:text-lg font-medium mb-5 mt-10">{t('VpsServers.title')}</h3>
              <ul className="space-y-4">
                <li><Link href="/dedicated-servers" className="text-gray-300 hover:text-white font-medium">{t('VpsServers.links.dedicatedServers')}</Link></li>
                <li><Link href="/cloud-servers" className="text-gray-300 hover:text-white font-medium">{t('VpsServers.links.cloudServers')}</Link></li>
                <li><Link href="/vps-hosting" className="text-gray-300 hover:text-white font-medium">{t('VpsServers.links.vpsHosting')}</Link></li>
                <li><Link href="/n8n-vps-hosting" className="text-gray-300 hover:text-white font-medium">{t('VpsServers.links.n8nVpsHosting')}</Link></li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-700 w-full" />

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0 font-medium">
              {t('Copyright.text')} <br />
              {t('Copyright.companyNumber')} <br />
              {t('Copyright.busunessAddress')} <br />
              <Link href="/privacy-policy" className="hover:text-white">{t('Copyright.links.privacyPolicy')}</Link>
              <span className="mx-2">|</span>
              <Link href="terms-conditions" className="hover:text-white">{t('Copyright.links.termsCondition')}</Link>
              <span className="mx-2">|</span>
              <Link href="/refund-policy" className="hover:text-white">{t('Copyright.links.refundPolicy')}</Link>
            </div>
            <div className="text-gray-300 text-sm font-medium mt-2">
              {t('PaymentSection.title')} <br />
              <Image
                src="/images/shared/payment-methods-new.png"
                alt="payment methods"
                width={350}
                height={30}
                className="mt-1"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}