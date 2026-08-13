export type Site = {
  metadata: {
    site: {
      name: string
      url: string
      locale: string
      author: string
      creator: string
    }

    seo: {
      keywords: string[]
    }

    images: {
      openGraph: string
    }

    social: {
      x: string
    }
  }

  footerCta: {
    title: string
    button: string
  }

  labels: {
    popular: string
    monthly: string
    homePage: string
    caseStudies: string
    blog: string
    readMore: string
    previous: string
    next: string
    sending: string
    sendMessage: string
    effectiveDate: string
    lastUpdated: string
  }

  urls: {
    caseStudiesPage: string
    blogPage: string
  }

  page404: {
    heading: string
    title: string
    subTitle: string
    returnHome: string
  }

  companyInfo: {
    website: string
    industry: string
    teamSize: string
    useCase: string
  }

  form: {
    name: {
      label: string
      placeholder: string
    }

    email: {
      label: string
      placeholder: string
    }

    message: {
      label: string
      placeholder: string
    }
  }

  message: {
    checkInput: string
    sentSuccessfully: string
    completeCaptcha: string
    captchaUnavailable: string
    unableSend: string
    captchaFailed: string
    nameIsRequired: string
    nameMustLessThan: string
    enterValidEmail: string
    emailMustLessThan: string
    messageMustAtLeast: string
    messageMustLessThan: string
  }
}