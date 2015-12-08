class Api::TodosController < ApplicationController

  def index
    render json: Todo.all
  end

  def show
    render json: Todo.find(params[:id])
  end

  def create
    render json: Todo.create!(todo_params)
  end

  def update
    curr_todo = Todo.find(params[:id])
    render json: curr_todo.update!(todo_params)
  end

  def destroy
    curr_todo = Todo.find(params[:id])
    curr_todo.destroy!
    render json: Todo.all
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
