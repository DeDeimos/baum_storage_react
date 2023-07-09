import { InputSearch } from "../../UI";
import { PostSelect } from "../../UI";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div style={{padding: "25px"}}>
      <InputSearch
        type="text"
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
      <PostSelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue={"Сортировка по"}
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
    </div>
  );

}

export { PostFilter };