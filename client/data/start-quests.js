
const pitchDescription = `
You want a rough idea of what you want the group to accomplish, and why other people would want to be in it.
For a local group, this can include;
* Socialising
* Improving your neighborhood
* Borrowing tools etc off each other

Your initial group concept is just for you. You don't actually need to share it with anyone else. 
But having a concept will give you a better idea of how to pitch it to other people and identify who you might 
want to invite to the group.
`

export const conceptQuest = {
    key: 'concept',
    title: 'Write a Group Pitch',
    description: pitchDescription,
    successCriteria: 'You have a group ptich that you feel good about yourself'
}

const firstMemberDescription = `
If you can find one person who likes the idea of your group then you can probably find more. 
So your first step is to find one person other than yourself who likes the idea of your group.

If you can't find anyone who likes our group idea, then you may want to go back to the pitch description.
`

export const firstMemberQuest = {
    key: 'first-member',
    title: 'Find your first member',
    description: firstMemberDescription,
    successCriteria: 'You have one other person who likes your group idea enough to co-host a kick-off party'
}

const partyDescription = `
Often a good way to kick start a new group is for you and your first member to throw a party together. 
`

export const partyQuest = {
    key: 'party',
    title: 'Throw a party',
    description: partyDescription,
}
