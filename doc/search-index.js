var N = null;var searchIndex = {};
searchIndex["arrayvec"]={"doc":"arrayvec provides the types `ArrayVec` and `ArrayString`:  array-backed vector and string types, which store their contents inline.","items":[[3,"ArrayString","arrayvec","A string with a fixed capacity.",N,N],[3,"CapacityError","","Error value indicating insufficient capacity",N,N],[3,"ArrayVec","","A vector with a fixed capacity.",N,N],[3,"IntoIter","","By-value iterator for `ArrayVec`.",N,N],[3,"Drain","","A draining iterator for `ArrayVec`.",N,N],[11,"default","","Return an empty `ArrayString`",0,[[],["arraystring"]]],[11,"new","","Create a new empty `ArrayString`.",0,[[],["arraystring"]]],[11,"from","","Create a new `ArrayString` from a `str`.",0,[[["str"]],["result",["capacityerror"]]]],[11,"from_byte_string","","Create a new `ArrayString` from a byte string literal.",0,[[["a"]],["result",["utf8error"]]]],[11,"capacity","","Return the capacity of the `ArrayString`.",0,[[["self"]],["usize"]]],[11,"is_full","","Return if the `ArrayString` is completely filled.",0,[[["self"]],["bool"]]],[11,"push","","Adds the given char to the end of the string.",0,[[["self"],["char"]]]],[11,"try_push","","Adds the given char to the end of the string.",0,[[["self"],["char"]],["result",["capacityerror"]]]],[11,"push_str","","Adds the given string slice to the end of the string.",0,[[["self"],["str"]]]],[11,"try_push_str","","Adds the given string slice to the end of the string.",0,[[["self"],["str"]],["result",["capacityerror"]]]],[11,"pop","","Removes the last character from the string and returns it.",0,[[["self"]],["option",["char"]]]],[11,"truncate","","Shortens this `ArrayString` to the specified length.",0,[[["self"],["usize"]]]],[11,"remove","","Removes a `char` from this `ArrayString` at a byte position and returns it.",0,[[["self"],["usize"]],["char"]]],[11,"clear","","Make the string empty.",0,[[["self"]]]],[11,"set_len","","Set the strings’s length.",0,[[["self"],["usize"]]]],[11,"as_str","","Return a string slice of the whole `ArrayString`.",0,[[["self"]],["str"]]],[11,"deref","","",0,[[["self"]],["str"]]],[11,"deref_mut","","",0,[[["self"]],["str"]]],[11,"eq","","",0,[[["self"],["self"]],["bool"]]],[11,"eq","","",0,[[["self"],["str"]],["bool"]]],[11,"hash","","",0,[[["self"],["h"]]]],[11,"borrow","","",0,[[["self"]],["str"]]],[11,"as_ref","","",0,[[["self"]],["str"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"write_char","","",0,[[["self"],["char"]],["result"]]],[11,"write_str","","",0,[[["self"],["str"]],["result"]]],[11,"clone","","",0,[[["self"]],["arraystring"]]],[11,"clone_from","","",0,[[["self"],["self"]]]],[11,"partial_cmp","","",0,[[["self"],["self"]],["option",["ordering"]]]],[11,"lt","","",0,[[["self"],["self"]],["bool"]]],[11,"le","","",0,[[["self"],["self"]],["bool"]]],[11,"gt","","",0,[[["self"],["self"]],["bool"]]],[11,"ge","","",0,[[["self"],["self"]],["bool"]]],[11,"partial_cmp","","",0,[[["self"],["str"]],["option",["ordering"]]]],[11,"lt","","",0,[[["self"],["str"]],["bool"]]],[11,"le","","",0,[[["self"],["str"]],["bool"]]],[11,"gt","","",0,[[["self"],["str"]],["bool"]]],[11,"ge","","",0,[[["self"],["str"]],["bool"]]],[11,"cmp","","",0,[[["self"],["self"]],["ordering"]]],[11,"clone","","",1,[[["self"]],["capacityerror"]]],[11,"cmp","","",1,[[["self"],["capacityerror"]],["ordering"]]],[11,"eq","","",1,[[["self"],["capacityerror"]],["bool"]]],[11,"ne","","",1,[[["self"],["capacityerror"]],["bool"]]],[11,"partial_cmp","","",1,[[["self"],["capacityerror"]],["option",["ordering"]]]],[11,"lt","","",1,[[["self"],["capacityerror"]],["bool"]]],[11,"le","","",1,[[["self"],["capacityerror"]],["bool"]]],[11,"gt","","",1,[[["self"],["capacityerror"]],["bool"]]],[11,"ge","","",1,[[["self"],["capacityerror"]],["bool"]]],[11,"new","","Create a new `CapacityError` from `element`.",1,[[["t"]],["capacityerror"]]],[11,"element","","Extract the overflowing element",1,[[["self"]],["t"]]],[11,"simplify","","Convert into a `CapacityError` that does not carry an element.",1,[[["self"]],["capacityerror"]]],[11,"description","","",1,[[["self"]],["str"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[8,"Array","","Trait for fixed size arrays.",N,N],[16,"Item","","The array’s element type",2,N],[8,"RangeArgument","","`RangeArgument` is implemented by Rust's built-in range types, produced by range syntax like `..`, `a..`, `..b` or `c..d`.",N,N],[11,"start","","Start index (inclusive)",3,[[["self"]],["option",["usize"]]]],[11,"end","","End index (exclusive)",3,[[["self"]],["option",["usize"]]]],[11,"drop","","",4,[[["self"]]]],[11,"new","","Create a new empty `ArrayVec`.",4,[[],["arrayvec"]]],[11,"len","","Return the number of elements in the `ArrayVec`.",4,[[["self"]],["usize"]]],[11,"capacity","","Return the capacity of the `ArrayVec`.",4,[[["self"]],["usize"]]],[11,"is_full","","Return if the `ArrayVec` is completely filled.",4,[[["self"]],["bool"]]],[11,"push","","Push `element` to the end of the vector.",4,N],[11,"try_push","","Push `element` to the end of the vector.",4,N],[11,"push_unchecked","","Push `element` to the end of the vector without checking the capacity.",4,N],[11,"insert","","Insert `element` at position `index`.",4,N],[11,"try_insert","","Insert `element` at position `index`.",4,N],[11,"pop","","Remove the last element in the vector and return it.",4,[[["self"]],["option"]]],[11,"swap_remove","","Remove the element at `index` and swap the last element into its place.",4,N],[11,"swap_pop","","Remove the element at `index` and swap the last element into its place.",4,[[["self"],["usize"]],["option"]]],[11,"remove","","Remove the element at `index` and shift down the following elements.",4,N],[11,"pop_at","","Remove the element at `index` and shift down the following elements.",4,[[["self"],["usize"]],["option"]]],[11,"truncate","","Shortens the vector, keeping the first `len` elements and dropping the rest.",4,[[["self"],["usize"]]]],[11,"clear","","Remove all elements in the vector.",4,[[["self"]]]],[11,"retain","","Retains only the elements specified by the predicate.",4,[[["self"],["f"]]]],[11,"set_len","","Set the vector’s length without dropping or moving out elements",4,[[["self"],["usize"]]]],[11,"drain","","Create a draining iterator that removes the specified range in the vector and yields the removed items from start to end. The element range is removed even if the iterator is not consumed until the end.",4,[[["self"],["r"]],["drain"]]],[11,"into_inner","","Return the inner fixed size array, if it is full to its capacity.",4,[[["self"]],["result"]]],[11,"dispose","","Dispose of `self` without the overwriting that is needed in Drop.",4,[[["self"]]]],[11,"as_slice","","Return a slice containing all elements of the vector.",4,N],[11,"as_mut_slice","","Return a mutable slice containing all elements of the vector.",4,N],[11,"deref","","",4,N],[11,"deref_mut","","",4,N],[11,"from","","",4,[[["a"]],["self"]]],[11,"into_iter","","",4,[[["self"]],["intoiter"]]],[11,"next","","",5,[[["self"]],["option"]]],[11,"size_hint","","",5,N],[11,"next_back","","",5,[[["self"]],["option"]]],[11,"drop","","",5,[[["self"]]]],[11,"clone","","",5,[[["self"]],["intoiter"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"next","","",6,[[["self"]],["option"]]],[11,"size_hint","","",6,N],[11,"next_back","","",6,[[["self"]],["option"]]],[11,"drop","","",6,[[["self"]]]],[11,"extend","","",4,[[["self"],["t"]]]],[11,"from_iter","","",4,[[["t"]],["self"]]],[11,"clone","","",4,[[["self"]],["self"]]],[11,"clone_from","","",4,[[["self"],["self"]]]],[11,"hash","","",4,[[["self"],["h"]]]],[11,"eq","","",4,[[["self"],["self"]],["bool"]]],[11,"eq","","",4,N],[11,"borrow","","",4,N],[11,"borrow_mut","","",4,N],[11,"as_ref","","",4,N],[11,"as_mut","","",4,N],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"default","","Return an empty array",4,[[],["arrayvec"]]],[11,"partial_cmp","","",4,[[["self"],["arrayvec"]],["option",["ordering"]]]],[11,"lt","","",4,[[["self"],["self"]],["bool"]]],[11,"le","","",4,[[["self"],["self"]],["bool"]]],[11,"ge","","",4,[[["self"],["self"]],["bool"]]],[11,"gt","","",4,[[["self"],["self"]],["bool"]]],[11,"cmp","","",4,[[["self"],["arrayvec"]],["ordering"]]],[11,"write","","",4,N],[11,"flush","","",4,[[["self"]],["result"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"to_string","","",0,[[["self"]],["string"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"from","","",1,[[["t"]],["t"]]],[11,"to_string","","",1,[[["self"]],["string"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"from","","",4,[[["t"]],["t"]]],[11,"into_iter","","",4,[[["self"]],["i"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,N],[11,"from","","",5,[[["t"]],["t"]]],[11,"into_iter","","",5,[[["self"]],["i"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into_iter","","",6,[[["self"]],["i"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"start","","Start index (inclusive)",3,[[["self"]],["option",["usize"]]]],[11,"end","","End index (exclusive)",3,[[["self"]],["option",["usize"]]]]],"paths":[[3,"ArrayString"],[3,"CapacityError"],[8,"Array"],[8,"RangeArgument"],[3,"ArrayVec"],[3,"IntoIter"],[3,"Drain"]]};
searchIndex["immutable_chunkmap"]={"doc":"Immutable maps and sets. See map and set modules for details.","items":[[0,"map","immutable_chunkmap","",N,N],[3,"Map","immutable_chunkmap::map","This Map uses a similar strategy to BTreeMap to ensure cache efficient performance on modern hardware while still providing log(N) get, insert, and remove operations.",N,N],[11,"clone","","",0,[[["self"]],["map"]]],[11,"hash","","",0,[[["self"],["h"]]]],[11,"default","","",0,[[],["map"]]],[11,"eq","","",0,[[["self"],["map"]],["bool"]]],[11,"partial_cmp","","",0,[[["self"],["map"]],["option",["ordering"]]]],[11,"cmp","","",0,[[["self"],["map"]],["ordering"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"index","","",0,[[["self"],["q"]],["v"]]],[11,"from_iter","","",0,[[["t"]],["self"]]],[11,"new","","Create a new empty map",0,[[],["self"]]],[11,"insert_many","","This will insert many elements at once, and is  potentially a lot faster than inserting one by one,  especially if the data is sorted. It is just a wrapper  around the more general update_many method.",0,[[["self"],["e"]],["self"]]],[11,"update_many","","This method updates multiple bindings in one call. Given an iterator of an arbitrary type (Q, D), where Q is any borrowed form of K, an update function taking Q, D, the current binding in the map, if any, and producing the new binding, if any, this method will produce a new map with updated bindings of many elements at once. It will skip intermediate node allocations where possible. If the data in elts is sorted, it will be able to skip many more intermediate allocations, and can produce a speedup of about 10x compared to inserting/updating one by one. In any case it should always be faster than inserting elements one by one, even with random unsorted keys.",0,[[["self"],["e"],["f"]],["self"]]],[11,"insert","","return a new map with (k, v) inserted into it. If k already exists in the old map, the old binding will be returned, and the new map will contain the new binding. In fact this method is just a wrapper around update.",0,N],[11,"update","","return a new map with the binding for q, which can be any borrowed form of k, updated to the result of f. If f returns None, the binding will be removed from the new map, otherwise it will be inserted. This function is more efficient than calling `get` and then `insert`, since it makes only one tree traversal instead of two. This method runs in log(N) time and space where N is the size of the map.",0,N],[11,"merge","","Merge two maps together. Bindings that exist in both maps will be passed to f, which may elect to remove the binding by returning None. This function runs in O(log(n) + m) time and space, where n is the size of the largest map, and m is the number of intersecting chunks. It will never be slower than calling update_many on the first map with an iterator over the second, and will be significantly faster if the intersection is minimal or empty.",0,[[["self"],["map"],["f"]],["self"]]],[11,"get","","lookup the mapping for k. If it doesn't exist return None. Runs in log(N) time and constant space. where N is the size of the map.",0,[[["self"],["q"]],["option"]]],[11,"get_key","","lookup the mapping for k. Return the key. If it doesn't exist return None. Runs in log(N) time and constant space. where N is the size of the map.",0,[[["self"],["q"]],["option"]]],[11,"get_full","","lookup the mapping for k. Return both the key and the value. If it doesn't exist return None. Runs in log(N) time and constant space. where N is the size of the map.",0,[[["self"],["q"]],["option"]]],[11,"remove","","return a new map with the mapping under k removed. If the binding existed in the old map return it. Runs in log(N) time and log(N) space, where N is the size of the map.",0,N],[11,"len","","get the number of elements in the map O(1) time and space",0,[[["self"]],["usize"]]],[11,"range","","return an iterator over the subset of elements in the map that are within the specified range.",0,[[["self"],["bound"],["bound"]],["iter"]]],[0,"set","immutable_chunkmap","",N,N],[3,"Set","immutable_chunkmap::set","This set uses a similar strategy to BTreeSet to ensure cache efficient performance on modern hardware while still providing log(N) get, insert, and remove operations. # Examples ``` use std::string::String; use self::immutable_chunkmap::set::Set;",N,N],[3,"SetIter","","",N,N],[11,"clone","","",1,[[["self"]],["set"]]],[11,"hash","","",1,[[["self"],["h"]]]],[11,"default","","",1,[[],["set"]]],[11,"eq","","",1,[[["self"],["set"]],["bool"]]],[11,"partial_cmp","","",1,[[["self"],["set"]],["option",["ordering"]]]],[11,"cmp","","",1,[[["self"],["set"]],["ordering"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"from_iter","","",1,[[["t"]],["self"]]],[11,"next","","",2,[[["self"]],["option"]]],[11,"next_back","","",2,[[["self"]],["option"]]],[11,"new","","Create a new empty set",1,[[],["self"]]],[11,"insert_many","","This will insert many elements at once, and is  potentially a lot faster than inserting one by one,  especially if the data is sorted.",1,[[["self"],["e"]],["self"]]],[11,"remove_many","","Remove multiple elements in a single pass. Similar performance to insert_many.",1,[[["self"],["e"]],["self"]]],[11,"update_many","","This is just slightly wierd, however if you have a bunch of borrowed forms of members of the set, and you want to look at the real entries and possibly add/update/remove them, then this method is for you.",1,[[["self"],["e"],["f"]],["self"]]],[11,"insert","","return a new set with k inserted into it. If k already exists in the old set return true, else false. If the element already exists in the set memory will not be allocated.",1,N],[11,"contains","","return true if the set contains k, else false. Runs in log(N) time and constant space. where N is the size of the set.",1,[[["self"],["q"]],["bool"]]],[11,"get","","return a reference to an item in the set if any that is equal to the given value.",1,[[["self"],["q"]],["option"]]],[11,"remove","","return a new set with k removed. Runs in log(N) time and log(N) space, where N is the size of the set",1,N],[11,"union","","return the union of 2 sets. Runs in O(log(N) + M) time, where N is the largest of the two sets, and M is the number of chunks that intersect, which is roughly proportional to the size of the intersection.",1,[[["self"],["set"]],["self"]]],[11,"len","","get the number of elements in the map O(1) time and space",1,[[["self"]],["usize"]]],[11,"range","","return an iterator over the subset of elements in the set that are within the specified range.",1,[[["self"],["bound"],["bound"]],["setiter"]]],[11,"to_owned","immutable_chunkmap::map","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"to_owned","immutable_chunkmap::set","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into_iter","","",2,[[["self"]],["i"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]]],"paths":[[3,"Map"],[3,"Set"],[3,"SetIter"]]};
searchIndex["nodrop"]={"doc":"The nodrop crate has the following cargo feature flags:","items":[[3,"NoDrop","nodrop","A type holding T that will not call its destructor on drop",N,N],[11,"new","","Create a new NoDrop.",0,[[["t"]],["nodrop"]]],[11,"into_inner","","Extract the inner value.",0,[[["self"]],["t"]]],[11,"drop","","",0,[[["self"]]]],[11,"deref","","",0,[[["self"]],["t"]]],[11,"deref_mut","","",0,[[["self"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]]],"paths":[[3,"NoDrop"]]};
initSearch(searchIndex);
