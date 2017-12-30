require 'test_helper'

class MedicalsControllersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @medicals_controller = medicals_controllers(:one)
  end

  test "should get index" do
    get medicals_controllers_url
    assert_response :success
  end

  test "should get new" do
    get new_medicals_controller_url
    assert_response :success
  end

  test "should create medicals_controller" do
    assert_difference('MedicalsController.count') do
      post medicals_controllers_url, params: { medicals_controller: {  } }
    end

    assert_redirected_to medicals_controller_url(MedicalsController.last)
  end

  test "should show medicals_controller" do
    get medicals_controller_url(@medicals_controller)
    assert_response :success
  end

  test "should get edit" do
    get edit_medicals_controller_url(@medicals_controller)
    assert_response :success
  end

  test "should update medicals_controller" do
    patch medicals_controller_url(@medicals_controller), params: { medicals_controller: {  } }
    assert_redirected_to medicals_controller_url(@medicals_controller)
  end

  test "should destroy medicals_controller" do
    assert_difference('MedicalsController.count', -1) do
      delete medicals_controller_url(@medicals_controller)
    end

    assert_redirected_to medicals_controllers_url
  end
end
