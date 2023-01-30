import css from './statistics.module.css';

const Statistics = ({ title, stats }) => {
    return (
        <>
            <section class={css.statistics}>
                <h2 className={css.title}>{title}</h2>
                <ul className={css.stat_list}>
                    {stats.map(stat => (
                        <li className={css.item}>
                            <span className={css.label}>{stat.label}</span>
                            <span className={css.percentage}>{stat.percentage}%</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Statistics;
