export enum DemoServices {
  ALL_SOLUTIONS = 'All Solutions',
  PERSONAL_FINANCIAL_SOLUTION = 'Personal Financial Solution',
  BUSINESS_FINANCIAL_SOLUTION = 'Business Financial Solution',
  ATM_SOLUTION = 'ATM Solution',
  DIGITAL_BRANCH = 'Digital Branch',
  WEALTH_MANAGEMENT = 'Wealth Management',
  ADMINISTRATION_SOLUTION = 'Administration Solution',
  OMNI_CHANNEL = 'Omni-Channel Solution',
}

export const demoServices: Array<any> = Object.keys(DemoServices).map(key => {
  return {
    key,
    value: DemoServices[key],
  };
});

export enum MobileLayers {
  SECURITY = 'Security',
  BANKING_CAPABILITIES = 'Banking Capabilities',
  SMART_ANALYSIS = 'Smart Analysis',
  DATA_ENRICHMENT = 'Data Enrichment',
  SMART_ASSISTANCE = 'Smart Assistance',
}

export const mobileLayers: Array<any> = Object.keys(MobileLayers).map(key => {
  return {
    key,
    value: MobileLayers[key],
  };
});
