import cn from 'classnames';

type Props = {
  /**
   * Current week
   */
  current: boolean;
}

export const Week = (props: Props) => {
  return(<div className={cn("w-8 h-8", props.current ? "bg-emerald-400" : "bg-slate-300")}>
    </div>
    )
}
