function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    this.root = null;
}

BinarySearchTree.prototype.insertIteratively = function(val){
	var newNode = new Node(val);
	if(this.root === null){
		this.root = newNode;
	} else {
		var left = false;
		var prev = null;
		var curr = this.root;
		while(curr !== null){
			if(val > curr.value){
				prev = curr;
				curr = curr.right;
				left = false;
			} else {
				prev = curr;
				curr = curr.left;
				left = true;
			}
		}
		left ? prev.left = newNode : prev.right = newNode;
	}
	return this;
}

BinarySearchTree.prototype.insertRecursively = function(val, node=this.root){
	if(this.root === null){
		this.root = new Node(val);
		return this;
	}
	if(val > node.value){
		if(node.right === null){
			node.right = new Node(val);
			return this;
		} else {
			return this.insertRecursively(val, node.right);
		}
	} else {
		if(node.left === null){
			node.left = new Node(val);
			return this;
		} else {
			return this.insertRecursively(val, node.left);
		}
	}
}

BinarySearchTree.prototype.findIteratively = function(value){
	var curr = this.root
	while(curr !== null){
		if(value === curr.value){
			return curr
		} else if(value > curr.value){
			curr = curr.right
		} else {
			curr = curr.left
		}

	}
	return undefined
}

BinarySearchTree.prototype.findRecursively = function(value, node=this.root){
	if(this.root.value === value) return this.root
	if(node === null) return undefined
	if(node.value === value) return node
	if(value > node.value){
		return this.findRecursively(value,node.right)
	} else {
		return this.findRecursively(value,node.left)
	}
}

BinarySearchTree.prototype.toArray = function(){
	var arr = [];

	function helper(node){
		if(node !== null){
			helper(node.left);
			arr.push(node.value);
			helper(node.right);
		}
	}
	helper(this.root);
	return arr;
}

BinarySearchTree.prototype.DFSPreOrder = function(){
	var arr = [];

	function helper(node){
		if(node !== null){
			arr.push(node.value);
			helper(node.left);
			helper(node.right);
		}
	}
	helper(this.root);
	return arr;
}

BinarySearchTree.prototype.DFSInOrder = BinarySearchTree.prototype.toArray


BinarySearchTree.prototype.DFSPostOrder = function(){
	var arr = [];

	function helper(node){
		if(node !== null){
			helper(node.left);
			helper(node.right);
			arr.push(node.value);
		}
	}
	helper(this.root);
	return arr;
}

BinarySearchTree.prototype.breadthFirstSearch = function(){
	var queue = [];
	var array = [];
	var curr = this.root;
	queue.push(curr);
	while(queue.length){
		curr = queue.shift();
		array.push(curr.value);
		if(curr.left !== null){
			queue.push(curr.left)
		}
		if(curr.right !== null){
			queue.push(curr.right)
		}
	}
	return array;
}









