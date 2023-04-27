export const ELEMENTARY_MA = 'EMA'
export const ELEMENTARY_CH = 'ECH'
export const ELEMENTARY_NA = 'ENA'
export const ELEMENTARY_SO = 'ESO'
export const ELEMENTARY_PE = 'EPE'
export const ELEMENTARY_CN = 'ECN'
export const ELEMENTARY_EN = 'EEN'
export const ELEMENTARY_LI = 'ELI'

// export const ELEMENTARY_MA_99 = 'E-MA'
// export const ELEMENTARY_CH_99 = 'E-CH'
// export const ELEMENTARY_NA_99 = 'E-NA'
// export const ELEMENTARY_SO_99 = 'E-SO'
// export const ELEMENTARY_PE_99 = 'E-PE'
// export const ELEMENTARY_CN_99 = 'E-CN'
// export const ELEMENTARY_EN_99 = 'E-EN'
// export const ELEMENTARY_LI_99 = 'E-LI'

export const JUNIOR_CH = 'JPC'
export const JUNIOR_CN = 'JCN'
export const JUNIOR_EN = 'JEN'
export const JUNIOR_MA = 'JMA'
export const JUNIOR_NA = 'JNA'
export const JUNIOR_BI = 'JBI'
export const JUNIOR_PY = 'JPY'
export const JUNIOR_GE = 'JGE'
export const JUNIOR_HI = 'JHI'
export const JUNIOR_CT = 'JCT'
export const JUNIOR_CO = 'JCO'
export const JUNIOR_EA = 'JEA'
export const JUNIOR_SO = 'JSO'
export const JUNIOR_PE = 'JPE'
export const JUNIOR_TC = 'JTC'

// export const JUNIOR_CH_99 = 'J-PC'
// export const JUNIOR_CN_99 = 'J-CN'
// export const JUNIOR_EN_99 = 'J-EN'
// export const JUNIOR_MA_99 = 'J-MA'
// export const JUNIOR_NA_99 = 'J-NA'
// export const JUNIOR_BI_99 = 'J-BI'
// export const JUNIOR_PY_99 = 'J-PY'
// export const JUNIOR_GE_99 = 'J-GE'
// export const JUNIOR_HI_99 = 'J-HI'
// export const JUNIOR_CT_99 = 'J-CT'
// export const JUNIOR_CO_99 = 'J-CO'
// export const JUNIOR_EA_99 = 'J-EA'
// export const JUNIOR_SO_99 = 'J-SO'
// export const JUNIOR_PE_99 = 'J-PE'
// export const JUNIOR_TC_99 = 'J-TC'

export const SENIOR_PC = 'HPC'
export const SENIOR_CN = 'HCN'
export const SENIOR_EW = 'HEW'
export const SENIOR_MA = 'HMA'
export const SENIOR_BI = 'HBI'
export const SENIOR_PH = 'HPH'
export const SENIOR_CH = 'HCH'
export const SENIOR_EA = 'HEA'
export const SENIOR_GE = 'HGE'
export const SENIOR_HI = 'HHI'
export const SENIOR_CS = 'HCS'
export const SENIOR_CE = 'HCE'

// export const SENIOR_PC_99 = 'H-PC'
// export const SENIOR_CN_99 = 'H-CN'
// export const SENIOR_EW_99 = 'H-EW'
// export const SENIOR_MA_99 = 'H-MA'
// export const SENIOR_BI_99 = 'H-BI'
// export const SENIOR_PH_99 = 'H-PH'
// export const SENIOR_CH_99 = 'H-CH'
// export const SENIOR_EA_99 = 'H-EA'
// export const SENIOR_GE_99 = 'H-GE'
// export const SENIOR_HI_99 = 'H-HI'
// export const SENIOR_CS_99 = 'H-CS'
// export const SENIOR_CE_99 = 'H-CE'

export const NORMAL_GRADE = [
  ELEMENTARY_MA,
  ELEMENTARY_CH,
  ELEMENTARY_NA,
  ELEMENTARY_SO,
  ELEMENTARY_PE,
  ELEMENTARY_CN,
  ELEMENTARY_EN,
  ELEMENTARY_LI,
  JUNIOR_CH,
  JUNIOR_CN,
  JUNIOR_EN,
  JUNIOR_MA,
  JUNIOR_NA,
  JUNIOR_BI,
  JUNIOR_PY,
  JUNIOR_GE,
  JUNIOR_HI,
  JUNIOR_CT,
  JUNIOR_CO,
  JUNIOR_EA,
  JUNIOR_SO,
  JUNIOR_PE,
  JUNIOR_TC,
  SENIOR_PC,
  SENIOR_CN,
  SENIOR_EW,
  SENIOR_MA,
  SENIOR_BI,
  SENIOR_PH,
  SENIOR_CH,
  SENIOR_EA,
  SENIOR_GE,
  SENIOR_HI,
  SENIOR_CS,
  SENIOR_CE,
]

export const test = NORMAL_GRADE.map((item)=>{
  let a = item.substr(0, 1)
  item = item.replace(a, a + "-")

  return item
})

export const ALL_GRADE = [
  ...NORMAL_GRADE,
  ...test
]

// 69
