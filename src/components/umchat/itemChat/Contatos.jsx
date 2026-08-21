export default function Contatos({ iconesContatos, nomeContato, dataMensagem }) {
  return (
    <div className="contatos">
      <img src={iconesContatos} alt={`Foto de perfil de ${nomeContato}`} />
      <div className="nome-dataContatos">
        <p className="nomeContato">{nomeContato}</p>
        <p className="dataMensagem">{dataMensagem}</p>
      </div>
    </div>
  )
}