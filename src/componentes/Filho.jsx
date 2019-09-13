import React from 'react'

export default props => 
    <div>
        <button 
            onClick={() => props.notificarSaida('Dar Rolé')}>
            Vou sair
        </button>
    </div>