import './styles.css'
import { LevelContext } from './levelContext';

export default function Section({ level, hi, children }) {
  // console.log(level, hi, children, 'children')
    return (
      <section className="section">
        <LevelContext.Provider value={{
          level,
          hi
        }}>
          {children}
        </LevelContext.Provider>
      </section>
    );
  }
  