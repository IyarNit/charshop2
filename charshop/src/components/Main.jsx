import React from 'react';
import { AbilityComp, AttacksComp, ACInitSpeed, ProficiencyInspiration, CharacterDetails, Health, Languages, PersonalityBondsTraitsFlaws, FeaturesTraits, PassiveWisdom, SavingThrows, Equipment, CharacterApperance, AlliesOrganizations, AdditionalFeaturesTraits, Treasure, Backstory,  } from "../assests/componentImporter"
import { userAuthenticator } from "../components/TokenAuthiticator"
const Main = (props) => {
    ////////Hooks////////////


    ////////Functions////////////


    /////////Jsx///////////
    return (
        <div style={{ width: "90%", left: "5%", position: "relative" }} className="d-flex flex-wrap">
            <h1 className="centerText">U WOT M8?!</h1>
            <CharacterDetails />
            <ProficiencyInspiration />
            <SavingThrows />
            <ACInitSpeed />
            <AbilityComp />
            <Health />
            <AttacksComp />
            <PersonalityBondsTraitsFlaws />
            <FeaturesTraits />
            <PassiveWisdom />
            <Languages />
            <Equipment />
            <CharacterApperance />
            <AlliesOrganizations />
            <AdditionalFeaturesTraits />
            <Treasure />
            <Backstory />
        </div>
    )
}
export default userAuthenticator((Main))