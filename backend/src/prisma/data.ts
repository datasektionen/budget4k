export type GroupSeed = {
    groupId: string;
    name: string;
    comment?: string;
    budgets?: BudgetSeed[];
};

export type BudgetSeed = {
    year: number;
    active?: boolean;
    comment?: string;
    costCenters?: CostCenterSeed[];
};

export type CostCenterSeed = {
    name: string;
    comment?: string;
    budgetLines?: BudgetLineSeed[];
    darken?: boolean;
};

export type BudgetLineSeed = {
    name: string;
    comment?: string;
    expense?: number;
    income?: number;
    validFrom?: Date;
    validTo?: Date;
    editDate?: Date;
    editedBy?: string;
    darken?: boolean;
};

export const budgets: GroupSeed[] = [
    {
        groupId: "baknamnden",
        name: "Baknämnden",
        budgets: [
            {
                year: 2022,
                costCenters: [
                    {
                        name: "Allmänt",
                        budgetLines: [
                            {
                                name: "Ätbart guld",
                                expense: 1000
                            },
                            {
                                name: "Fika",
                                expense: 1000
                            },
                            {
                                name: "Ingredienser",
                                expense: 2000
                            },
                            {
                                name: "Lokalhyra",
                                expense: 2100
                            },
                            {
                                name: "Maskiner och redskap",
                                expense: 500
                            },
                            {
                                name: "Teambuilding",
                                expense: 1000
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        groupId: "centralt",
        name: "Centralt",
        budgets: [
            {
                year: 2022,
                costCenters: [
                    {
                        name: "Allmänt",
                        budgetLines: [
                            {
                                name: "Apple Developer Program"
                            },
                            {
                                name: "Återanvändbara festatteraljer",
                                expense: 0
                            },
                            {
                                name: "Avgift avfallshantering",
                                expense: 0
                            },
                            {
                                name: "Bankavgifter",
                                expense: 0
                            },
                            {
                                name: "Bokföringsmorot",
                                expense: 0
                            },
                            {
                                name: "Förbandslåda",
                                expense: 0
                            },
                            {
                                name: "Förrådshyra",
                                expense: 0
                            },
                            {
                                name: "Försäkring",
                                expense: 0
                            },
                            {
                                name: "iZettle-avgifter",
                                expense: 0
                            },
                            {
                                name: "Julklappar D-funk",
                                expense: 0
                            },
                            {
                                name: "Kontorsmaterial",
                                expense: 0
                            },
                            {
                                name: "Ordenstecken och medaljer",
                                expense: 0
                            },
                            {
                                name: "Sektionsavgift",
                                expense: 0
                            },
                            {
                                name: "Selz tjänst",
                                expense: 0
                            },
                            {
                                name: "Speedledger",
                                expense: 0
                            },
                            {
                                name: "Teambuilding D-funk",
                                expense: 0
                            },
                            {
                                name: "Tillsynsavgifter Myndigheter",
                                expense: 0
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        groupId: "datasladden",
        name: "Datasladden"
    },
    {
        groupId: "ddagen",
        name: "D-Dagen"
    },
    {
        groupId: "demon",
        name: "Demon"
    },
    {
        groupId: "desc",
        name: "DESC"
    },
    {
        groupId: "dkm",
        name: "DKM"
    },
    {
        groupId: "drek",
        name: "D-rektoratet",
        comment: "Konglig Datasektionens styrelse",
        budgets: [
            {
                year: 2022,
                costCenters: [
                    {
                        name: "Allmänt",
                        comment: "Allmäna grejer",
                        budgetLines: [
                            {
                                name: "Fika",
                                expense: 4000,
                                comment: "Goa grjer"
                            },
                            {
                                name: "Juridisk rådgivning",
                                expense: 40000
                            },
                            {
                                name: "Profilmaterial",
                                expense: 2500
                            },
                            {
                                name: "Representation",
                                expense: 14000
                            },
                            {
                                name: "Representationsgåvor",
                                expense: 5000
                            },
                            {
                                name: "Skrivarkvot",
                                expense: 2000
                            },
                            {
                                name: "Tryckkostnad",
                                expense: 2000
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
