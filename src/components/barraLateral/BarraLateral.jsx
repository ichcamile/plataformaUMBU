import ItemBarra from './ItemBarra/ItemBarra.jsx'
import SuperiorCard from './superiorCard/SuperiorCard.jsx'
import { FiHome } from 'react-icons/fi'
import { BiMessage, BiHelpCircle } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineNotificationsActive, MdOutlineSettings, MdOutlineLibraryBooks } from 'react-icons/md'
import { TbPhotoPlus } from 'react-icons/tb'
import { RiPagesLine } from 'react-icons/ri'
import fotoJar from '../../assets/jardineiroFoto.png'
import './barraLateral.css'

function BarraLateral() {
  return (
    <div className="barraLateral">
      <SuperiorCard
        nomeJar="José Ferreira"
        cargo="Jardineiro"
        fotoJar={fotoJar}
      />

      <div className="itemSite">
        <ItemBarra iconUrl={<FiHome />} nome="Página Inicial" rota="/painelcontrole" />
        <ItemBarra iconUrl={<BiMessage />} nome="UMChat" rota="/chat" />
        <ItemBarra iconUrl={<CgProfile />} nome="Perfil" rota="/perfil" />
        <ItemBarra iconUrl={<MdOutlineLibraryBooks />} nome="Teste" rota="/testeConhecimento" />
        <ItemBarra iconUrl={<MdOutlineNotificationsActive />} nome="Notificações" rota="/notificacoes" />
        <ItemBarra iconUrl={<TbPhotoPlus />} nome="Publicar" rota="/publicar" />
      </div>

      <div className="itemFinal">
        <ItemBarra iconUrl={<RiPagesLine />} nome="UMBLog" rota="/umblog" />
        <ItemBarra iconUrl={<BiHelpCircle />} nome="Fale Conosco" rota="/faleconosco" />
        <ItemBarra iconUrl={<MdOutlineSettings />} nome="Editar Perfil" rota="/editarperfil" />
      </div>
    </div>
  )
}

export default BarraLateral