const DELETE_ID = 'delete';
const COPY_ID = 'copy';

const requestTypes = [
  { id: DELETE_ID, value: 'Suppression de mes données' },
  { id: COPY_ID, value: "Envoi d'une copie de mes données" },
];

const frConf = {
  [DELETE_ID]: {
    object: "Demande d'effacement de données personnelles (RGPD Article 17)",
    content: (fullName, additionalInfo) => `Madame, Monsieur,

En application de l’article 17.1 du Règlement général sur la protection des données (RGPD), je vous prie d’effacer de vos fichiers toutes les données personnelles me concernant.

Si j'ai consenti au traitement de mes données à caractère personnel (par exemple, conformément à l'Article 6, alinéa 1, ou à l'Article 9, alinéa 2 du RGPD), je retire ce consentement par la présente.
En outre, je m'oppose au traitement des données à caractère personnel me concernant (ce qui inclut le profilage), conformément à l'Article 21 du RGPD.

Enfin, si vous ne traitez pas les requêtes RGPD, veuillez transmettre cet email à votre Data Protection Officer ou à la personne en charge. Vous dispozes d'un délai de 30 jours pour répondre à cette requête.


${
  additionalInfo
    ? `
Vous pouvez utiliser ces informations complémentaires afin de m'identifier dans votre système :
${additionalInfo}

`
    : ''
}
Cordialement,
${fullName}.`,
  },
  [COPY_ID]: {
    object: "Droit d'accès aux données personnelles (RGPD article 15)",
    content: (fullName, additionalInfo) => `Madame, Monsieur,

Je vous prie de bien vouloir m’indiquer si des données me concernant figurent dans vos fichiers informatisés ou manuels.

Dans l’affirmative, je souhaiterais obtenir une copie, en langage clair, de l’ensemble de ces données , en application de l’article 15 du Règlement général sur la protection des données (RGPD).

Je vous remercie de me faire parvenir votre réponse dans les meilleurs délais et au plus tard dans un délai d’un mois à compter de la réception de ma demande (article 12.3 du RGPD).

${
  additionalInfo
    ? `
Vous pouvez utiliser ces informations complémentaires afin de m'identifier dans votre système :
${additionalInfo}

`
    : ''
}
Cordialement,
${fullName}.`,
  },
};

const enConf = {
  [DELETE_ID]: {
    object: 'Erasure Request (Article 17 of the GDPR)',
    content: (fullName, additionalInfo) => `To whom it may concern:

I am writing to request that you erase all my personal information from all your information systems pursuant to Article 17 of the General Data Protection Regulation (GDPR). To the extent that you rely on consent to process my personal data, I withdraw that consent. To the extent that you rely on your 'legitimate interest' to process my personal data, I object to the processing as there are no overriding legitimate grounds.

Please confirm that you have erased my personal information from your systems, and that you have followed up with any controller with whom my information has been shared to ensure that they erase their copy of the data. Let me know if you need any further information to identify me and locate my records.

Please note that I do not consent to any personal information which is part of this request, including my email address and name, to be used for any purpose other than fulfilling this request.

If you do not normally deal with data protection requests, please forward this email to your Data Protection Officer, or relevant member of staff. Please note that you have 30 days to comply with this request.

${
  additionalInfo
    ? `
Additional information to identify me in your systems:
${additionalInfo}
`
    : ''
}
Kind regards,
${fullName}.
`,
  },
  [COPY_ID]: {
    object: 'Subject Access Request (Article 15 of the GDPR)',
    content: (fullName, additionalInfo) => `To whom it may concern:

I am writing to obtain the following information that I am entitled to receive pursuant to Article 15 of the General Data Protection Regulation (GDPR). Please confirm as to whether or not my personal data is being processed, and, where that is the case, please provide the following information:

1. a copy of my personal data that you have or are processing

2. a detailed account of the specific uses that you have made, are making, or will be making of my personal data

3. the purposes of the processing

4. the categories of personal data concerned

5. a list of all third parties with whom you have (or may have) shared my personal data

If you do not normally deal with data protection requests, please forward this email to your Data Protection Officer, or relevant member of staff. Please note that I have the right to receive this information in a standardized format within 30 days of your receipt of this request.

${
  additionalInfo
    ? `Please use the following information to identify me in your systems:
${additionalInfo}
`
    : ''
}
Kind regards,
${fullName}.
`,
  },
};

export { requestTypes, frConf, enConf };
