import React, { useState } from 'react';
import { weaponsArr } from "../assests/equipment"
import { AttacksHolderComp } from "../assests/componentImporter"

const AttacksComp = (props) => {
    ////////Hooks////////////
    const [chosenWeapons, setChosenWeapons] = useState([])
    const [update, setUpdate] = useState(false)
    const [showSelect, setShowSelect] = useState(false)
    const [labels, setShowLabels] = useState(false)

    ////////Functions////////////

    const weaponsSelect = weaponsArr.sort((a, b) => a.name.localeCompare(b.name)).map((w) => { return <option>{w.name}</option> })


    const weaponFinder = async (weaponName) => {
        const fullWeapon = weaponsArr.filter((w) => { return w.name === weaponName })[0]
        const newArr = chosenWeapons
        newArr.push(fullWeapon)
        setChosenWeapons(newArr)
        // console.log(chosenWeapons)
        await setUpdate(true)
        await setUpdate(false)
        await setShowSelect(false)
        await setShowLabels(true)
    }

    const weaponFinderDeleter = async (weaponName) => {
        const fullWeapon = weaponsArr.filter((w) => { return w.name === weaponName })[0]
        const newArr = chosenWeapons
        const index = newArr.findIndex(e => e.name === fullWeapon.name)
        newArr.splice(index, 1)
        setChosenWeapons(newArr)
        await setUpdate(true)
        await setUpdate(false)
        if (newArr.length === 0) {
            setShowLabels(false)
        }
    }

    const weaponList = chosenWeapons?.map((w) => { return <AttacksHolderComp update={update} weapon={w} delete={weaponFinderDeleter} /> })

    /////////Jsx///////////
    return (
        <div>
            <div>
                <h1>Attacks & Spellcasting</h1>
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-success" onClick={() => { setShowSelect(true) }}>Add new weapon</button>
                <button type="button" className="btn btn-primary" onClick={() => { alert("we need to add spells first") }}>Add new spell</button>
            </div>
            {!showSelect ? null : <> <p>Choose your Weapon</p><select class="form-select" style={{ width: "50%", margin: "auto" }} onChange={(e) => { weaponFinder(e.target.value) }}><option></option>{weaponsSelect}</select>
                <button type="button" className="btn btn-danger" onClick={() => { setShowSelect(false) }}>Cancel</button>
            </>}
            {/* {!labels ? null : <>
                <label className="form-label">Name</label>
                <label className="form-label">profeciency Bonus</label>
                <label className="form-label">dmg</label>
                <label className="form-label">Ability Modifier Bonus</label>
                <label className="form-label">Other Modifiers</label>
                <label className="form-label">dmgType</label>
                <label className="form-label">range</label></>} */}
            {weaponList}
            <hr />

        </div>
    )
}
export default AttacksComp




// do not delete this part:
// TDL:
// connect profiecency to be recieved from the future profieciency tab
// altering the db for better dmg values for the calculations. right now its a string. i suggest adding hidden keys for amount of cubes and number of rolls for each weapons
// adding magic/masterwork toggle
// adding the roll damage feature with working modal, advantage disadvantage throw and dmg calculators
// add more here if u have ideas