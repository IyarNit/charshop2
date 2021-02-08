const weaponsArr = [
    {
        name: "Club", dmgDie: "1d4", dmgType: "bludgeoning", rolls: 1, dmgMax1: 4, min: 1, range: ""
    },
    {
        name: "Dagger", dmgDie: "1d4", dmgType: "piercing", rolls: 1, dmgMax1: 4, min: 1, range: "20-60", thrown: true
    },
    {
        name: "Greatclub", dmgDie: "1d8", dmgType: "bludgeoning", rolls: 1, dmgMax1: 8, min: 1, range: ""
    },
    {
        name: "Handaxe", dmgDie: "1d6", dmgType: "slashing", rolls: 1, dmgMax1: 6, min: 1, range: "20-60", thrown: true
    },
    {
        name: "Javelin", dmgDie: "1d6", dmgType: "piercing", rolls: 1, dmgMax1: 6, min: 1, range: "30-120", thrown: true
    },
    {
        name: "Light hammer", dmgDie: "1d4", dmgType: "bludgeoning", rolls: 1, dmgMax1: 4, min: 1, range: "20-60", thrown: true
    },
    {
        name: "Mace", dmgDie: "1d6", dmgType: "bludgeoning", rolls: 1, dmgMax1: 6, min: 1, range: ""
    },
    {
        name: "Greatclub", dmgDie: "1d8", dmgType: "bludgeoning", rolls: 1, dmgMax1: 8, min: 1, range: ""
    },
    {
        name: "Quarterstaff", dmgDie: "1d6/1d8", dmgType: "bludgeoning", rolls: 1, dmgMax1: 6, dmgMax2: 8, min: 1, range: "", versatile: true
    },
    {
        name: "Sickle", dmgDie: "1d4", dmgType: "slashing", rolls: 1, dmgMax1: 4, min: 1, range: ""
    },
    {
        name: "Spear", dmgDie: "1d6", dmgType: "piercing", rolls: 1, dmgMax1: 6, min: 1, range: "20-60", thrown: true
    },
    {
        name: "Unarmed Strike", dmgDie: "1", dmgType: "bludgeoning", rolls: 1, dmgMax1: 1, min: 1, range: ""
    },
    {
        name: "Light crossbow", dmgDie: "1d8", dmgType: "piercing", rolls: 1, dmgMax1: 8, min: 1, range: "80-320"
    },
    {
        name: "Dart", dmgDie: "1d4", dmgType: "piercing", rolls: 1, dmgMax1: 4, min: 1, range: "20-60", thrown: true
    },
    {
        name: "Shortbow", dmgDie: "1d6", dmgType: "piercing", rolls: 1, dmgMax1: 6, min: 1, range: "80-320"
    },
    {
        name: "Sling", dmgDie: "1d4", dmgType: "bludgeoning", rolls: 1, dmgMax1: 4, min: 1, range: "30-120"
    },
    {
        name: "Battleaxe", dmgDie: "1d8/1d10", dmgType: "slashing", rolls: 1, dmgMax1: 8, dmgMax2: 10, min: 1, range: "", versatile: true
    },
    {
        name: "Flail", dmgDie: "1d8", dmgType: "bludgeoning", rolls: 1, dmgMax1: 8, min: 1, range: ""
    },
    {
        name: "Glaive", dmgDie: "1d10", dmgType: "slashing", rolls: 1, dmgMax1: 10, min: 1, range: ""
    },
    {
        name: "Greataxe", dmgDie: "1d12", dmgType: "slashing", rolls: 1, dmgMax1: 12, min: 1, range: ""
    },
    {
        name: "Greatsword", dmgDie: "2d6", dmgType: "slashing", rolls: 1, dmgMax1: 12, min: 2, range: ""
    },
    {
        name: "Halbred", dmgDie: "1d10", dmgType: "slashing", rolls: 1, dmgMax1: 10, min: 1, range: ""
    },
    {
        name: "Lance", dmgDie: "1d12", dmgType: "piercing", rolls: 1, dmgMax1: 12, min: 1, range: ""
    },
    {
        name: "Longsword", dmgDie: "1d8/1d10", dmgType: "slashing", rolls: 1, dmgMax1: 8, dmgMax2: 10, min: 1, range: "", versatile: true
    },
    {
        name: "Maul", dmgDie: "2d6", dmgType: "bludgeoning", rolls: 1, dmgMax1: 12, min: 2, range: ""
    },
    {
        name: "Morningstar", dmgDie: "1d8", dmgType: "piercing", rolls: 1, dmgMax1: 8, min: 1, range: ""
    },
    {
        name: "Pike", dmgDie: "1d10", dmgType: "piercing", rolls: 1, dmgMax1: 10, min: 1, range: ""
    },
    {
        name: "Rapier", dmgDie: "1d8", dmgType: "slashing", rolls: 1, dmgMax1: 8, min: 1, range: ""
    },
    {
        name: "Scimitar", dmgDie: "1d6", dmgType: "slashing", rolls: 1, dmgMax1: 6, min: 1, range: ""
    },
    {
        name: "Shortsword", dmgDie: "1d6", dmgType: "slashing", rolls: 1, dmgMax1: 6, min: 1, range: ""
    },
    {
        name: "Trident", dmgDie: "1d6", dmgType: "piercing", rolls: 1, dmgMax1: 6, min: 1, range: "20-60", thrown: true
    },
    {
        name: "War pick", dmgDie: "1d8", dmgType: "slashing", rolls: 1, dmgMax1: 8, min: 1, range: ""
    },
    {
        name: "Warhammer", dmgDie: "1d8/1d10", dmgType: "slashing", rolls: 1, dmgMax1: 8, dmgMax2: 10, min: 1, range: "", versatile: true
    },
    {
        name: "Whip", dmgDie: "1d4", dmgType: "slashing", rolls: 1, dmgMax1: 4, min: 1, range: ""
    },
    {
        name: "Blowgun", dmgDie: "1", dmgType: "piercing", rolls: 1, dmgMax1: 1, min: 1, range: "25-100"
    },
    {
        name: "Hand crossbow", dmgDie: "1d6", dmgType: "piercing", rolls: 1, dmgMax1: 6, min: 1, range: "30-120"
    },
    {
        name: "Heavy crossbow", dmgDie: "1d10", dmgType: "piercing", rolls: 1, dmgMax1: 10, min: 1, range: "100-400"
    },
    {
        name: "Longbow", dmgDie: "1d8", dmgType: "piercing", rolls: 1, dmgMax1: 8, min: 1, range: "150-600"
    },
    {
        name: "Net", dmgDie: "", dmgType: "", range: "5-15", rolls: 1, dmgMax1: 0, min: 0, thrown: true
    }
]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
export {
    weaponsArr,
    numbers
}