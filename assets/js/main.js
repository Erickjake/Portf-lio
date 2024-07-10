function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('phone1')
    phone.innerText = profileData.phone
    phone.href = `tel:${phone}`

    const email = document.getElementById('email1')
    email.innerText = profileData.email
    email.href = `mailto:${email}`


}

function updateSoftSkills(profileData) {
            
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateLanguages(profileData){
    const languages = document.getElementById('language')
    languages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('')
}

function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
                <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
                </li>
        `
    }).join('')
}

function updateExperience(profileData){
    const experiencia = document.getElementById('experience')
    experiencia.innerHTML = profileData.professionalExperience.map(experiencia => {
        return `
         <li>
                    <span class="title"><h3 id="experience">${experiencia.name}</h3></span>
                    <span class="period" id="periodo"><h3>${experiencia.period}</h3></span>
                    <h4 id="descricao">${experiencia.description}</h4>
                        
        </li>

        `
    }).join('')
}
(async () => {

    const profileData = await fetchProfileData()

    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
})()