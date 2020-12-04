const DELETE_ID = 'delete';
const COPY_ID = 'copy';

const requestTypes = [
  { id: DELETE_ID, value: 'Suppression de mes données' },
  { id: COPY_ID, value: "Envoi d'une copie de mes données" },
];

const frConf = {
  [DELETE_ID]: {
    object: '',
    content: '',
  },
  [COPY_ID]: {
    object: '',
    content: '',
  },
};

const enConf = {
  [DELETE_ID]: {
    object: 'Erasure Request (Article 17 of the GDPR)',
    content: additionalInfo => `
    To whom it may concern:

    I am writing to request that you erase all my personal information from all your information systems pursuant to Article 17 of the General Data Protection Regulation (GDPR). To the extent that you rely on consent to process my personal data, I withdraw that consent. To the extent that you rely on your 'legitimate interest' to process my personal data, I object to the processing as there are no overriding legitimate grounds.
    
    Please confirm that you have erased my personal information from your systems, and that you have followed up with any controller with whom my information has been shared to ensure that they erase their copy of the data. If you need any further information from me in order to identify me or locate my records in your systems, please let me know as soon as possible. My preferred method of contact is email.
    
    Please note that I do not consent to any personal information which is part of this request, including my email address and name, to be used for any purpose other than fulfilling this request.
    
    If you do not normally deal with data protection requests, please forward this email to your Data Protection Officer, or relevant member of staff. Please note that you have 30 days to comply with this request.
    
    ${
      additionalInfo
        ? `
    Please use the following information to identify me in your systems:
    ${additionalInfo}
    `
        : ''
    }
    Kind regards,  
    `,
  },
  [COPY_ID]: {
    object: 'Subject Access Request (Article 15 of the GDPR)',
    content: additionalInfo => `
    To whom it may concern:

    I am writing to obtain the following information that I am entitled to receive pursuant to Article 15 of the General Data Protection Regulation (GDPR). Please confirm as to whether or not my personal data is being processed, and, where that is the case, please provide the following information:
    
    1. a copy of my personal data that you have or are processing
    
    
    2. a detailed account of the specific uses that you have made, are making, or will be making of my personal data
    
    
    3. the purposes of the processing
    
    
    4. the categories of personal data concerned
    
    
    5. a list of all third parties with whom you have (or may have) shared my personal data
    
    
    6. where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period
    
    
    7. where the personal data are not collected from me, any available information as to their source, as referred to in Article 14 of the GDPR
    
    
    8. the existence of automated decision-making, including profiling, and at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for me
    
    
    9. the safeguards you provide if you transfer my personal data to a third country or international organisation
    
    
    10. In addition, I would like to know whether or not my personal data has been disclosed inadvertently by your company in the past, or as a result of a security or privacy breach:
        10.1 a general description of what occurred
        10.2 the date and time of the breach (or the best possible estimate)
        10.3 the date and time the breach was discovered
        10.4 the source of the breach (either your own organization, or a third party to whom you have transferred my personal data)
        10.5 details of my personal data that was disclosed
        10.6 your company’s assessment of the risk of harm to myself, as a result of the breach
        10.7 a description of the measures taken or that will be taken to prevent further unauthorized access to my personal data
        10.8 contact information so that I can obtain more information and assistance in relation to such a breach
        10.9 information and advice on what I can do to protect myself against any harms, including identity theft and fraud
    
    Please note that I do not consent to any personal information which is part of this request, including my email address and name, to be used for any purpose other than fulfilling this request.
    
    If you do not normally deal with data protection requests, please forward this email to your Data Protection Officer, or relevant member of staff. Please note that I have the right to receive this information in a standardized format within 30 days of your receipt of this request.
    
    ${
      additionalInfo
        ? `
    Please use the following information to identify me in your systems:
    ${additionalInfo}
    `
        : ''
    }
    Kind regards,
    
    `,
  },
};

export { requestTypes };
