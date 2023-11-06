import { conceptQuest, firstMemberQuest, partyQuest, researchQuest } from "./start-quests";

export const localGroupSteps = [
    {name: 'Getting Started',
        quests: [researchQuest, conceptQuest, firstMemberQuest],
        success: 'Your group has 2 initial members, concept you both like',
    },
    {name: 'Recruiting Initial Members',
        quests: [partyQuest],
        success: 'Your group has 5 core members'
    }
]   


export const simpleLocalGroupQuests = [
    researchQuest, conceptQuest, firstMemberQuest, partyQuest
]