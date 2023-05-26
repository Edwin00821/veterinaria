import React from 'react'
import PrincipalsServices from './PrincipalsServices'
import { FaAmbulance, FaMagnet, FaStethoscope, FaUserMd } from 'react-icons/fa'
import { IoPawSharp } from 'react-icons/io5'
import { IoMdMedkit } from 'react-icons/io'

const Services = () => {
  return (
    <section className='flex w-full flex-col items-center justify-center gap-10 py-10'>
      <h2 className='text-5xl font-bold text-primary underline decoration-wavy underline-offset-8 '>
        Servicios Principales
      </h2>
      <div className='grid w-10/12 grid-cols-1 items-center justify-center lg:grid-cols-2 xl:grid-cols-3'>
        <PrincipalsServices
          title='Resonancia magnética'
          text='Es un método de diagnóstico por imágenes que usa un imán de gran potencia y ondas de radiofrecuencia como principio físico para poder generar cortes del cuerpo del paciente.'
          icon={
            <FaMagnet className='h-[50px] w-[50px] rotate-45 text-primary' />
          }
        />
        <PrincipalsServices
          title='Tomografia Computarizada '
          text='Es un método de diagnóstico por imagen seccional, que a través del uso de rayos X facilita el diagnóstico y tratamiento de enfermedades o lesiones.'
          icon={<FaStethoscope className='h-[50px] w-[50px] text-primary' />}
        />
        <PrincipalsServices
          title='Urgencias'
          text='En Centro Veterinario México la salud de tu mascota es nuestra prioridad, brindamos atención médica a perros, gatos y animales exóticos las 24 horas los 365 días del año.'
          icon={<FaAmbulance className='h-[50px] w-[50px] text-primary' />}
        />
        <PrincipalsServices
          title='Animales exóticos'
          text='Atención especializada para animales exóticosque comprenden una gran variedad de especies de origen legal, algunas especies de aves y reptiles; así como peces e invertebrados.'
          icon={<IoPawSharp className='h-[50px] w-[50px] text-primary' />}
        />
        <PrincipalsServices
          title='Dermatología'
          text='Las mascotas son más susceptibles a desarrollar alergias y enfermedades de la piel, en Centro Veterinario México diagnosticamos y tratamos cada caso de forma personal.'
          icon={<FaUserMd className='h-[50px] w-[50px] text-primary' />}
        />
        <PrincipalsServices
          title='Especialidad en Cirugía'
          text='Nuestra área de cirugía tiene el equipo y personal altamente capacitado para realizar diversos tipos de procedimientos con el mayor rango de seguridad anestésica.'
          icon={<IoMdMedkit className='h-[50px] w-[50px] text-primary' />}
        />
      </div>
    </section>
  )
}

export default Services
