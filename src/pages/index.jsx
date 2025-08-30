import { useState, useCallback } from 'react'

const Teste = () => {

    const [age, setAge] = useState(30);
    const [name, setName] = useState('Rafael');

    //Coment: useCallback = Salva referências em funções.

    const handleChangeName = useCallback(() => {
        setName(prev => prev === 'Rafael' ? 'Raphael' : 'Rafael');
    }, [])
    const handleChangeAge = useCallback(() => {
        
        const newAge = 10 * age;

        console.log('Age inicial', age,'Nova idade', newAge);

            setAge(prev => prev === 30 ? 35 : 30);
        }, [age])
    
    //Coment: useMemo = Salva referências em variáveis (const, var, let)

    // const calculo = useMemo(() => {        

    //      return 10 * age;
    //      }, [age]);         

    // useEffect(()=>{
    //     alert('Componente Renderizado')
    //     return () => {
    //         alert('Componente desmontado')}
    // },[name])

  return (
    <div>
        <p>
            Idade:{age}            
        </p><br />
        <p>
            Nome:{name}
        </p> <br />
        <button onClick={handleChangeAge}>Alterar idade</button> <br /><br />
        <button onClick={handleChangeName}>Alterar nome</button>
    </div>
  )
}
export { Teste }
