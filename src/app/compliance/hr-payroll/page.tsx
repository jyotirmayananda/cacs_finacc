
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'HR & Payroll Compliance Services | CACS FinAcc Digital',
  description: 'Streamline your HR and payroll processes with our expert compliance services. We handle everything from salary processing to PF, ESI, and TDS compliance.',
};

const payrollChecklist = [
    { item: "Salary Calculation & Payslip", frequency: "Monthly", rule: "As per employment agreement" },
    { item: "TDS Deduction & Deposit", frequency: "Monthly", rule: "By 7th of following month (Section 192)" },
    { item: "TDS Return (Form 24Q)", frequency: "Quarterly", rule: "31st Jul / 31st Oct / 31st Jan / 31st May" },
    { item: "Form 16 Issuance", frequency: "Annual", rule: "By 15th June 2025 for FY 2024-25" },
    { item: "PF Contribution (EPF)", frequency: "Monthly", rule: "By 15th of following month" },
    { item: "ESI Contribution", frequency: "Monthly", rule: "By 15th of following month" },
    { item: "Professional Tax (PT)", frequency: "Monthly/Quarterly", rule: "Varies by State (e.g., 20th monthly in MH)" },
    { item: "Labour Welfare Fund (LWF)", frequency: "Half-Yearly", rule: "June & December (varies by State)" },
    { item: "Leave & Attendance Record", frequency: "Ongoing", rule: "Maintain for 5 years minimum" },
    { item: "Employment Agreements", frequency: "At hiring", rule: "Signed & stamped at onboarding" },
];

const complianceInclusions = [
    { area: "Payroll Processing", inclusions: "Salary computation, bonuses, arrears" },
    { area: "TDS on Salaries (Section 192)", inclusions: "Calculation, deduction, Form 24Q, Form 16" },
    { area: "Provident Fund (PF)", inclusions: "Employee + Employer contribution, ECR filing" },
    { area: "Employee State Insurance (ESI)", inclusions: "Deductions, return filing" },
    { area: "Professional Tax", inclusions: "State-wise deduction and payment" },
    { area: "Gratuity & Bonus", inclusions: "Compliance with Bonus Act and Gratuity Act" },
    { area: "Labour Welfare Fund", inclusions: "Deduction/payment as per state rules" },
    { area: "Leave Encashment, LTA, HRA", inclusions: "Tax calculation and declaration verification" },
    { area: "Employment Registers", inclusions: "Attendance, wage, muster rolls (for audit/inspection)" },
];

const businessCategories = [
    { category: "Startups", considerations: "Payroll outsourcing, ESOP taxation, flexible CTC structures" },
    { category: "SMEs/Manufacturing", considerations: "Shift allowances, wage code readiness, shop floor compliance" },
    { category: "IT/ITES", considerations: "TDS on remote employees, hybrid work policy formalization" },
    { category: "Contract Workforce", considerations: "CLRA registration, monthly contractor ECR/ESI follow-up" },
];

const nonComplianceConsequences = [
    { area: "TDS on Salary", penalty: "Interest @ 1.5% p.m. + ₹200/day late fee + penalty u/s 271H" },
    { area: "EPF / ESI Non-payment", penalty: "Damages up to 25% + interest + prosecution in extreme cases" },
    { area: "Professional Tax Default", penalty: "₹1,000 – ₹5,000 per month (varies by State)" },
    { area: "Labour Law Violation", penalty: "₹10,000 – ₹1,00,000 + imprisonment (depending on Act and severity)" },
    { area: "No Form 16 Issued", penalty: "₹100/day delay under Section 272A" },
];

const dueDates = [
    { compliance: "TDS Payment (Salaries)", dueDate: "7th of every month" },
    { compliance: "TDS Return (Form 24Q, Q1–Q4)", dueDate: "31st Jul / 31st Oct / 31st Jan / 31st May" },
    { compliance: "Form 16 Issuance", dueDate: "15th June 2025" },
    { compliance: "PF Payment", dueDate: "15th of every month" },
    { compliance: "ESI Payment", dueDate: "15th of every month" },
    { compliance: "Professional Tax", dueDate: "Varies state-wise (monthly/annually)" },
    { compliance: "Bonus & Gratuity Payment", dueDate: "As per respective Acts within prescribed timelines" },
];

const requiredDocuments = [
    "Employee master data (PAN, Aadhaar, DOB, bank details)",
    "Salary structure (CTC components)",
    "Investment declarations (80C, 80D, HRA, etc.)",
    "Attendance and leave records",
    "TDS challans and previous Form 24Q filings",
    "PF, ESI, PT registration numbers and login credentials",
    "Any voluntary deductions or advances",
];

const ourServices = [
    { title: "Complete Payroll Processing", description: "Salary, tax, bonus, reimbursements, and payslip generation" },
    { title: "TDS Computation & Filing (24Q)", description: "Monthly TDS calculation and quarterly returns with Form 16 issuance" },
    { title: "PF, ESI & PT Filing", description: "Monthly challan creation, payment, and compliance documentation" },
    { title: "Labour Law Registers & Returns", description: "Maintenance of wage, muster, bonus, and overtime registers" },
    { title: "Audit & Inspection Support", description: "End-to-end assistance during EPFO, ESIC, Income Tax, and Labour inspections" },
    { title: "Custom Software Integration", description: "We work with Zoho Payroll, GreytHR, Keka, QuickBooks, and Tally ERP HRMS" },
];

const whyChooseUs = [
    "One-Stop Solution – Payroll, TDS, EPF, ESI, PT, Bonus, Gratuity – all covered",
    "Expert Advisory – Tax-optimized payroll structuring for different industries",
    "Automation Ready – Tally, Zoho Payroll, GreytHR, RazorpayX, and other tools supported",
    "Secure & Confidential – 100% data protection and employee privacy compliance",
    "Monthly HR Reports – HRMIS dashboards, employee cost analysis, attrition logs",
];


export default function HrPayrollPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Compliances', href: '/compliance' },
            { label: 'HR & Payroll' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-hr-payroll">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">HR & Payroll Compliance Services</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    Managing HR and payroll efficiently is crucial for any business. We offer an all-in-one, cloud-based payroll solution designed to streamline employee management, payroll processing, PF and ESI compliance, and automated salary tax calculation. Whether you're a startup or an established enterprise, our services ensure accuracy, efficiency, and full compliance with Indian labour laws, making payroll seamless and hassle-free.
                </p>
            </section>

            <section id="what-is-compliance">
                <h2 className="text-3xl font-bold font-headline">What is HR & Payroll Compliance?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    HR & Payroll Compliance involves the accurate processing of employee salaries, deductions, benefits, and reporting in accordance with applicable labour laws, tax regulations, and statutory frameworks in India. For any organization, non-compliance can result in:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground">Heavy penalties</li>
                    <li className="text-muted-foreground">Employee disputes</li>
                    <li className="text-muted-foreground">Labour law litigation</li>
                    <li className="text-muted-foreground">Reputational damage</li>
                </ul>
                 <p className="mt-4 text-muted-foreground text-justify">
                    AY 2025-26 has brought several important amendments in TDS, PF, ESI, and gratuity thresholds, making timely payroll compliance more critical than ever.
                </p>
            </section>

            <section id="compliance-checklist">
                <h2 className="text-3xl font-bold font-headline">Payroll Compliance Checklist – AY 2025-26</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Compliance Item</TableHead>
                            <TableHead>Frequency</TableHead>
                            <TableHead>Due Date / Rule</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {payrollChecklist.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.item}</TableCell>
                                <TableCell>{item.frequency}</TableCell>
                                <TableCell>{item.rule}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            <section id="what-it-includes">
                <h2 className="text-3xl font-bold font-headline">What Does Payroll Compliance Include?</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Compliance Area</TableHead>
                            <TableHead>Key Inclusions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {complianceInclusions.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.area}</TableCell>
                                <TableCell>{item.inclusions}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            <section id="business-categories">
                <h2 className="text-3xl font-bold font-headline">Payroll Compliance in Different Business Categories</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Category</TableHead>
                            <TableHead>Key Considerations</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {businessCategories.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.category}</TableCell>
                                <TableCell>{item.considerations}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
            
            <section id="non-compliance-consequences">
                <h2 className="text-3xl font-bold font-headline">Consequences of Non-Compliance</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Non-Compliance Area</TableHead>
                            <TableHead>Penalty / Consequence</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {nonComplianceConsequences.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.area}</TableCell>
                                <TableCell>{item.penalty}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            <section id="due-dates">
                <h2 className="text-3xl font-bold font-headline">Essential Payroll Compliance Due Dates AY 2025-26</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Compliance</TableHead>
                            <TableHead>Due Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {dueDates.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.compliance}</TableCell>
                                <TableCell>{item.dueDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
            
            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents & Information Required</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {requiredDocuments.map((doc, index) => (
                    <li key={index} className="text-muted-foreground">{doc}</li>
                ))}
              </ul>
            </section>
            
            <section id="how-we-help">
                <h2 className="text-3xl font-bold font-headline">How CACSFinacc Simplifies HR & Payroll Compliance</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {ourServices.map((service, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{service.title}:</strong>
                            <p className="text-muted-foreground text-justify">{service.description}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for HR & Payroll Compliance?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whyChooseUs.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
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
