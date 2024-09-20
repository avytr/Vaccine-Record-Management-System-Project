function DoseDetail({dose}) {
    return(
        <div>
            <p>{dose.vaccine.toString(dose.vaccine)}</p>
            <p>Date: {dose.injection_date}</p>
            <p>Adverse Reaction: {dose.adverse_reaction}</p>
            <p>Address: {dose.location.toString(dose.location.address)}</p>
        </div>
    )
}

export default DoseDetail;