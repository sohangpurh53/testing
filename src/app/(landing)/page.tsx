'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  StockOutlined,
  AccountBookOutlined,
  MessageOutlined,
  TeamOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Real-Time Communication',
      description:
        'Engage in seamless real-time discussions with your team, clients, and stakeholders.',
      icon: <MessageOutlined />,
    },
    {
      heading: 'Stock Management',
      description:
        'Efficiently manage your stock and inventory with our integrated tools.',
      icon: <StockOutlined />,
    },
    {
      heading: 'Account Management',
      description:
        'Keep track of all your accounts effortlessly with our comprehensive management system.',
      icon: <AccountBookOutlined />,
    },
    {
      heading: 'Enhanced Collaboration',
      description:
        'Collaborate more effectively with your team and ensure everyone is on the same page.',
      icon: <TeamOutlined />,
    },
    {
      heading: 'Error Reduction',
      description:
        'Minimize data entry errors and improve compliance with our streamlined workflows.',
      icon: <CheckCircleOutlined />,
    },
    {
      heading: 'Regulatory Updates',
      description:
        'Stay up-to-date with the latest financial data and regulatory changes.',
      icon: <EditOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Senior Accountant',
      content:
        'This application has revolutionized the way we handle our accounting tasks. The real-time communication feature is a game-changer!',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Financial Manager',
      content:
        'Managing accounts and stock has never been easier. Our team’s productivity has skyrocketed!',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Robert Brown',
      designation: 'Business Owner',
      content:
        'The integration of accounting functions with real-time chat has significantly reduced our errors and improved our workflow.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Emily White',
      designation: 'Accountant',
      content:
        'Staying compliant with regulatory changes is now a breeze. Highly recommend this tool!',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'Michael Green',
      designation: 'Accounting Firm Partner',
      content:
        'Our clients are happier, and our team is more efficient. This application is a must-have for any accounting firm.',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Sophia Blue',
      designation: 'Accountant',
      content:
        'The best tool we’ve used for managing our accounting tasks and communicating with our team.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
    {
      title: 'FAQ',
      link: '#faq',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'For small teams and individuals',
      monthly: 9,
      yearly: 69,
      features: ['Real-Time Communication', 'Stock Management'],
    },
    {
      title: 'Pro',
      description: 'For growing teams and businesses',
      monthly: 19,
      yearly: 149,
      features: [
        'Real-Time Communication',
        'Stock Management',
        'Account Management',
      ],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'For large organizations',
      monthly: 29,
      yearly: 229,
      features: [
        'Real-Time Communication',
        'Stock Management',
        'Account Management',
        'Enhanced Collaboration',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'How does the real-time chat feature work?',
      answer:
        'Our real-time chat feature allows you to communicate instantly with your team and clients, ensuring everyone is on the same page.',
    },
    {
      question: 'Can I manage multiple accounts?',
      answer:
        'Yes, our application supports comprehensive account management, allowing you to handle multiple accounts effortlessly.',
    },
    {
      question: 'Is the application secure?',
      answer:
        'Absolutely. We prioritize security and ensure that all your data is protected with the latest encryption technologies.',
    },
    {
      question: 'Do you offer customer support?',
      answer:
        'Yes, we offer 24/7 customer support to assist you with any questions or issues you may have.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description: 'Create an account to get started.',
    },
    {
      heading: 'Set Up Your Profile',
      description:
        'Customize your profile and integrate your accounting tools.',
    },
    {
      heading: 'Start Communicating',
      description: 'Engage in real-time chats with your team and clients.',
    },
    {
      heading: 'Manage Your Accounts',
      description:
        'Effortlessly handle your stock and account management tasks.',
    },
  ]

  const painPoints = [
    {
      emoji: '😓',
      title: 'Struggling with inefficient workflows?',
    },
    {
      emoji: '📉',
      title: 'Facing costly errors due to data entry mistakes?',
    },
    {
      emoji: '🔄',
      title: 'Finding it hard to keep up with regulatory changes?',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Transform Your Accounting Experience"
        subtitle="Streamline your accounting tasks with real-time communication and integrated management tools."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/ppY9nC-realtimechatapplicationforbusinesses-aJNo"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy accountants"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints
        title="Overcoming Accounting Challenges"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="How It Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Your Accounting Goals"
        subtitle="Our features are designed to help you manage your accounting tasks more effectively."
        features={features}
      />
      <LandingTestimonials
        title="Success Stories"
        subtitle="See how our application has helped others achieve their accounting dreams."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose Your Plan"
        subtitle="Find the perfect plan to resolve your accounting challenges."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Transform Your Accounting?"
        subtitle="Get started today and see the difference."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
