
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';

export const metadata: Metadata = {
  title: 'Trust Registration Services | CACS FinAcc Digital',
  description: 'Register your Public or Private Trust with our expert services. We provide comprehensive guidance on trust deed drafting and registration.',
};

const partiesInvolved = [
    {
        title: "Trustor",
        description: "The trustor is the person who establishes the trust. They are typically the owner of the assets or property being placed in the trust."
    },
    {
        title: "Trustee",
        description: "The trustee is an individual or entity entrusted with the responsibility of managing and overseeing the trust. They hold and administer the trust property on behalf of the trustor and for the benefit of the beneficiary."
    },
    {
        title: "Beneficiary",
        description: "The beneficiary is the person for whom the trust is created. They are the intended recipient of the benefits, assets, or property held within the trust. The beneficiary can be a third party, known to both the trustor and trustee, and they are entitled to receive the benefits according to the terms and conditions of the trust."
    }
];

const registrationRequirements = [
    "A trust must be formed by at least two or more individuals.",
    "The trust must be established in accordance with the Indian Trusts Act of 1882.",
    "None of the parties involved should be disqualified under any prevailing law in India.",
    "The objectives of the trust must not contravene any existing laws in India.",
    "The trustee must conduct activities in a fair and just manner.",
    "The trust formation should not be contrary to public interest or any other applicable laws.",
    "The activities carried out by the trust must not cause harm to any individual.",
    "The trust activities should align with the objectives stated in the trust deed.",
    "The trust deed must be drafted appropriately, reflecting the genuine interests of the parties involved.",
    "If the trust has more than two purposes, both must be valid. If one is invalid, the trust cannot be formed."
];

const trustDeedContents = [
    "Period or term for which the trust will remain in operation.",
    "The registered office address of the trust.",
    "The geographical area or region where the trust will carry out its activities.",
    "The goals and objectives that the trust aims to achieve.",
    "Information about the settlor and details of the assets or property being transferred to the trust.",
    "Information about the board of trustees, including their membership, qualifications, terms, and tenure.",
    "The roles, responsibilities, and powers of the trustees.",
    "Procedures for amending the trust deed and provisions for closure or termination of the trust."
];

const documentsRequired = [
    "Trust Deed with the respective stamp value",
    "Two photographs of the parties involved in the trust",
    "PAN cards of the individuals associated with the trust",
    "Address proof of the individuals",
    "Identity proof of the individuals",
    "Objectives & Activity Plan (for 12A/80G)",
    "Audited Financials (for trusts with receipts > ₹1 crore)",
    "Authentication from the partners (if applicable)",
    "No Objection Certificate for using the premises (if applicable)",
    "Any form of a utility bill as proof of address",
    "Address proof of the trust registered office",
    "12A Registration and 80G Certificates from the respective income tax authorities to claim deductions (if applicable)"
];

const registrationProcess = [
    { step: 1, action: "Draft Trust Deed", description: "Include name, objectives, settlor(s), trustee(s), beneficiaries." },
    { step: 2, action: "Execute & Stamp Deed", description: "On e-stamp portal at appropriate state rate." },
    { step: 3, action: "Apply to Registrar", description: "Submit deed, ID & address proofs of trustees, and NOC (if any)." },
    { step: 4, action: "Obtain Trust PAN & TAN", description: "File Form 49A (PAN) and Form 49B (TAN) online." },
    { step: 5, action: "Apply for 12A & 80G", description: "Submit application to Income Tax Department with audit report." },
    { step: 6, action: "(If needed) FCRA Registration", description: "Apply/renew on Sinha portal for foreign funding." },
];

const benefits = [
    "<strong>Legal Validity & Asset Protection</strong>",
    "<strong>Income Tax Exemptions:</strong> Section 12A registration; 80G donor deductions.",
    "<strong>Grant Eligibility:</strong> Access to CSR funds, government grants, and foreign contributions.",
    "<strong>Credibility & Transparency:</strong> Mandatory annual filings (Form 10B, Form 9A for 80G) boost donor confidence.",
    "<strong>Succession Planning:</strong> Private trusts secure family assets with clear beneficiary rules.",
];

export default function TrustRegistrationPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registrations', href: '/registration' },
            { label: 'Trust Registration' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-trust">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Trust Registration in India</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    Trusts are a business structure created with noble intentions to promote the development of sciences, literature, and other worthy causes. They serve purposes such as alleviating scarcity, providing education to those in need, and offering medical support. Trust registration is officially registering a trust under the Trusts Act of 1882. This legal step ensures that the trust is recognized and operates within the framework of the law. Trust registration online provides legal validity and establishes its existence as a separate entity.
                </p>
            </section>

            <section id="parties-involved">
                <h2 className="text-3xl font-bold font-headline">Parties Involved in the Trust Registration Process</h2>
                <div className="mt-4 space-y-4">
                    {partiesInvolved.map((party, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-semibold">{party.title}</h3>
                            <p className="text-muted-foreground text-justify">{party.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="types-of-trusts">
                <h2 className="text-3xl font-bold font-headline">Types of Trusts</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Trusts can be classified into various categories based on the activities they undertake. You need to understand these types to navigate how to register a trust in India. The different types of trusts include Public Trust, Private Trust, and Public Cum-Private Trust.
                </p>
                <div className="mt-4 space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold">Private Limited Trusts</h3>
                        <p className="text-muted-foreground text-justify">
                            Private Limited Trusts are established to carry out activities for specific individuals, families, or close associates. These trusts can have beneficiaries closely related to the trust's founders and are governed by The Trusts Act of 1882.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Public Limited Trusts</h3>
                        <p className="text-muted-foreground text-justify">
                            Public limited trusts are typically created to benefit the general public. They are often established for charitable, educational, and religious purposes and are governed by specific statutes such as the Religious Endowments Act of 1863, the Charitable and Religious Trust Act of 1920, or the Bombay Public Trust Act of 1950.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Public Cum-Private Trust</h3>
                        <p className="text-muted-foreground text-justify">
                            This type of trust serves both public and private purposes. It can utilize its income for the benefit of the public and specific individuals or families. The beneficiaries of a public cum-private trust can be a combination of public and private individuals.
                        </p>
                    </div>
                </div>
            </section>

             <section id="registration-requirements">
                <h2 className="text-3xl font-bold font-headline">Registration Requirements for the Trust</h2>
                <p className="mt-4 text-muted-foreground text-justify">To be eligible to obtain a certificate of trust registration, the following criteria must be met:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {registrationRequirements.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

            <section id="trust-deed-contents">
                <h2 className="text-3xl font-bold font-headline">Contents of a Trust Deed</h2>
                <p className="mt-4 text-muted-foreground text-justify">A trust deed is a crucial document that outlines the key details and provisions of a trust. It encompasses the following clauses:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {trustDeedContents.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for Trust Registration Online</h2>
               <p className="mt-4 text-muted-foreground text-justify">Ensure you have these documents before beginning the trust registration process:</p>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {documentsRequired.map((item, index) => (
                    <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>
            </section>
            
            <section id="registration-process">
              <h2 className="text-3xl font-bold font-headline">Procedure for Registration of Trust</h2>
              <div className="mt-6 space-y-6">
                {registrationProcess.map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                     <div className="flex-shrink-0 font-bold text-lg text-foreground">{item.step}.</div>
                     <div>
                        <h4 className="font-semibold text-lg"><strong>{item.action}</strong></h4>
                        <p className="text-muted-foreground text-justify">{item.description}</p>
                     </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="benefits">
                <h2 className="text-3xl font-bold font-headline">Key Benefits of Trust Registration</h2>
                 <ul className="mt-4 space-y-3 list-disc pl-5">
                    {benefits.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

          </div>

          <aside className="lg:col-span-1 space-y-8 sticky top-24">
            <QuoteForm />
            <Card>
              <CardHeader>
                <CardTitle className="font-headline uppercase">Have a Question?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex items-center gap-2">
                    <strong>Phone:</strong>
                    <a href="tel:+919591633648" className="text-primary hover:underline">+91 9591633648</a>
                </p>
                 <p className="flex items-center gap-2">
                    <strong>Email:</strong>
                    <a href="mailto:info@cacsfinaccservices.com" className="text-primary hover:underline">info@cacsfinaccservices.com</a>
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
